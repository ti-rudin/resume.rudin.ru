import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/api/strapi'
import { useAuthStore } from './auth'

export const useClientStore = defineStore('client', () => {
  const client = ref(null)
  const cars = ref([])
  const orders = ref([])
  const loading = ref(false)
  const error = ref(null)

  const authStore = useAuthStore()

  // Вычисляемые свойства
  const clientInfo = computed(() => client.value)
  const clientCars = computed(() => cars.value)
  const clientOrders = computed(() => orders.value)

  // Загрузка данных клиента
  async function fetchClientData(forceRefresh = false) {
    if (!authStore.isAuthenticated) {
      return
    }

    loading.value = true
    error.value = null

    try {
      // Если не принудительное обновление и данные уже есть в authStore, используем их
      if (!forceRefresh && authStore.user?.client) {
        const clientData = authStore.user.client

        // Устанавливаем данные клиента
        client.value = clientData

        // Загружаем автомобили
        if (clientData.cars) {
          cars.value = Array.isArray(clientData.cars)
            ? clientData.cars
            : clientData.cars.data || []
        }

        // Загружаем заказы
        if (clientData.orders) {
          orders.value = Array.isArray(clientData.orders)
            ? clientData.orders
            : clientData.orders.data || []
        }
      } else {
        // Принудительное обновление - всегда делаем свежий запрос к серверу
        // Принудительное обновление или данных нет - делаем свежий запрос
        if (authStore.user?.id) {
          // Используем логику из auth.js для получения свежих данных
          try {
            // Получаем свежие данные клиента - пробуем разные варианты фильтра
            let clientsResponse

            try {
              // Используем данные клиента из authStore, если они есть
              if (authStore.user?.client) {
                console.log('Используем данные клиента из authStore:', authStore.user.client)
                clientsResponse = { data: { data: [authStore.user.client] } }
              } else {
                // Fallback: получаем всех клиентов и ищем нужного
                console.log('Данные клиента не найдены в authStore, ищем среди всех клиентов')
                const allClientsResponse = await api.get('/clients?populate=user')
                console.log('Все клиенты:', allClientsResponse.data?.data)
                console.log('Текущий пользователь ID:', authStore.user.id)

                if (allClientsResponse.data?.data) {
                  // Ищем клиента по ID из authStore.user.client
                  const clientId = authStore.user?.client?.id
                  if (clientId) {
                    const userClient = allClientsResponse.data.data.find(client => client.id === clientId)
                    if (userClient) {
                      clientsResponse = { data: { data: [userClient] } }
                      console.log('Клиент найден по ID:', userClient)
                    } else {
                      console.warn('Клиент с ID', clientId, 'не найден среди всех клиентов')
                      return
                    }
                  } else {
                    console.warn('ID клиента не найден в authStore.user.client')
                    return
                  }
                } else {
                  console.warn('Не удалось получить список клиентов')
                  return
                }
              }
            } catch (fallbackError) {
              console.warn('Не удалось получить данные клиента:', fallbackError)
              return
            }

            if (clientsResponse.data?.data && clientsResponse.data.data.length > 0) {
              const clientData = clientsResponse.data.data[0]

              // Загружаем автомобили
              try {
                const carsResponse = await api.get(`/cars?filters[client][id][$eq]=${clientData.id}&populate=*`)
                clientData.cars = carsResponse.data?.data || []
              } catch (carsError) {
                console.warn('Ошибка загрузки автомобилей, используем пустой массив')
                clientData.cars = []
              }

              // Загружаем заказы с populate
              try {
                const ordersResponse = await api.get(`/orders?filters[client][id][$eq]=${clientData.id}&populate[car]=true&populate[works]=true&populate[parts]=true`)
                clientData.orders = ordersResponse.data?.data || []
              } catch (ordersError) {
                console.warn('Ошибка загрузки заказов, используем пустой массив')
                clientData.orders = []
              }

              client.value = clientData

              // Загружаем автомобили в локальный state
              if (clientData.cars) {
                cars.value = Array.isArray(clientData.cars)
                  ? clientData.cars
                  : clientData.cars.data || []
              }

              // Загружаем заказы в локальный state
              if (clientData.orders) {
                orders.value = Array.isArray(clientData.orders)
                  ? clientData.orders
                  : clientData.orders.data || []
              }

              // Обновляем данные в authStore для синхронизации
              if (authStore.user) {
                authStore.user.client = clientData
                // Сохраняем обновленные данные в localStorage
                localStorage.setItem('user', JSON.stringify(authStore.user))
              }
            }
          } catch (clientError) {
            console.error('Ошибка загрузки клиента:', clientError)
          }
        }
      }

    } catch (err) {
      console.error('Ошибка загрузки данных клиента:', err)
      error.value = err.message || 'Ошибка загрузки данных'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Принудительное обновление данных клиента
  async function refreshClientData() {
    // Делаем принудительное обновление данных с сервера
    await fetchClientData(true)

    return client.value
  }

  // Обновление профиля клиента
  async function updateClientProfile(clientData) {
    if (!client.value?.id) {
      throw new Error('Клиент не найден')
    }

    loading.value = true
    error.value = null

    try {
      const response = await api.put(`/clients/${client.value.id}`, {
        data: {
          name: clientData.name,
          phone: clientData.phone,
          address: clientData.address
        }
      })

      // Обновляем локальные данные
      client.value = {
        ...client.value,
        ...response.data.data
      }

      return client.value
    } catch (err) {
      console.error('Ошибка обновления профиля:', err)
      error.value = err.message || 'Ошибка обновления профиля'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Добавление автомобиля
  async function addCar(carData) {
    if (!client.value?.id) {
      throw new Error('Клиент не найден')
    }

    loading.value = true
    error.value = null

    try {
      const response = await api.post('/cars', {
        data: {
          ...carData,
          client: client.value.id
        }
      })

      // Добавляем в локальный массив
      const newCar = response.data.data || response.data
      cars.value.push(newCar)

      return newCar
    } catch (err) {
      console.error('Ошибка добавления автомобиля:', err)
      error.value = err.message || 'Ошибка добавления автомобиля'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Обновление автомобиля
  async function updateCar(carId, carData) {
    loading.value = true
    error.value = null

    try {
      const response = await api.put(`/cars/${carId}`, {
        data: carData
      })

      // Обновляем в локальном массиве
      const index = cars.value.findIndex(car => car.id === carId)
      if (index !== -1) {
        cars.value[index] = response.data.data || response.data
      }

      return cars.value[index]
    } catch (err) {
      console.error('Ошибка обновления автомобиля:', err)
      error.value = err.message || 'Ошибка обновления автомобиля'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Удаление автомобиля
  async function removeCar(carId) {
    loading.value = true
    error.value = null

    try {
      await api.delete(`/cars/${carId}`)

      // Удаляем из локального массива
      const index = cars.value.findIndex(car => car.id === carId)
      if (index !== -1) {
        cars.value.splice(index, 1)
      }
    } catch (err) {
      console.error('Ошибка удаления автомобиля:', err)
      error.value = err.message || 'Ошибка удаления автомобиля'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Очистка данных при выходе
  function clearData() {
    client.value = null
    cars.value = []
    orders.value = []
    error.value = null
  }

  return {
    // State
    client,
    cars,
    orders,
    loading,
    error,

    // Getters
    clientInfo,
    clientCars,
    clientOrders,

    // Actions
    fetchClientData,
    refreshClientData,
    updateClientProfile,
    addCar,
    updateCar,
    removeCar,
    clearData
  }
})
