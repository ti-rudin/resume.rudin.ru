import { defineStore } from 'pinia'
import api from '@/api/strapi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: false,
    error: null,
    status: 'out',
    isInitialized: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.user && !!state.token,
    userEmail: (state) => state.user?.email,
    userId: (state) => state.user?.id,
    isClient: (state) => state.user?.role?.type === 'clients'
  },

  actions: {
    async init() {
      if (this.isInitialized) return this.user

      this.loading = true
      try {
        const userData = localStorage.getItem('user')
        const token = localStorage.getItem('jwt')

        if (userData && token) {
          this.user = JSON.parse(userData)
          this.token = token
          this.status = 'in'

          // Не обновляем данные клиента при инициализации, используем сохраненные
          // await this.refreshClientData()
        } else {
          this.status = 'out'
        }
      } catch (error) {
        console.error('Auth init error:', error)
        this.logout()
      } finally {
        this.isInitialized = true
        this.loading = false
      }
      return this.user
    },

    async loginWithEmail(email, password) {
      this.loading = true
      this.error = null

      try {
        // 1. Основная аутентификация
        const authResponse = await api.post('/auth/local', {
          identifier: email,
          password: password
        })

        if (!authResponse.data?.jwt) {
          throw new Error('Ошибка: токен не получен')
        }

        // 2. Сохраняем базовые данные
        this.user = authResponse.data.user
        this.token = authResponse.data.jwt
        this.status = 'in'
        localStorage.setItem('user', JSON.stringify(this.user))
        localStorage.setItem('jwt', this.token)

        // 3. Дополнительные данные (не блокируем)
        try {
          // Пытаемся получить данные из localStorage (если они были сохранены ранее)
          const storedUserData = localStorage.getItem('user')
          if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData)
            if (parsedUserData.client) {
              this.user = {
                ...this.user,
                client: parsedUserData.client
              }
            }
          }

          // Пробуем получить свежие данные клиента
          if (!this.user.client) {
            try {
              // Получаем список клиентов
              const clientsPopulate = await api.get('/clients?populate=*')

              if (clientsPopulate.data?.data && clientsPopulate.data.data.length > 0) {
                // У нас есть клиент, загружаем его данные напрямую
                const clientDataFromList = clientsPopulate.data.data[0]
                const clientDocumentId = clientDataFromList.documentId

                try {
                  // Запрос по documentId (Strapi v5)
                  const docIdClientResponse = await api.get(`/clients/${clientDocumentId}`)
                  const clientData = docIdClientResponse.data.data || docIdClientResponse.data

                  // Загружаем автомобили отдельно
                  try {
                    const carsResponse = await api.get(`/cars?filters[client][id][$eq]=${clientData.id}`)
                    clientData.cars = carsResponse.data?.data || []
                  } catch (carsError) {
                    clientData.cars = []
                  }

                  // Загружаем заказы отдельно с populate
                  try {
                    const ordersResponse = await api.get(`/orders?filters[client][id][$eq]=${clientData.id}&populate[car]=true&populate[works]=true&populate[parts]=true`)
                    clientData.orders = ordersResponse.data?.data || []
                  } catch (ordersError) {
                    clientData.orders = []
                  }

                  this.user = {
                    ...this.user,
                    client: clientData
                  }
                } catch (simpleError) {
                  // Fallback - используем данные из списка клиентов
                  const listClientData = clientsPopulate.data.data[0]
                  listClientData.cars = []
                  listClientData.orders = []

                  this.user = {
                    ...this.user,
                    client: listClientData
                  }
                }
              }
            } catch (populateError) {
              // Все методы загрузки не сработали
            }
          }

          localStorage.setItem('user', JSON.stringify(this.user))
        } catch (error) {
          // Тихая ошибка, не прерываем процесс входа
        }

        return this.user
      } catch (error) {
        console.error('Ошибка входа:', error)
        this.error = error.response?.data?.error?.message ||
                   error.message ||
                   'Ошибка входа. Проверьте данные.'
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(email, password, clientData) {
      this.loading = true
      this.error = null

      try {
        // 1. Регистрация пользователя
        const registerResponse = await api.post('/auth/local/register', {
          username: email,
          email: email,
          password: password
        })

        if (!registerResponse.data?.user) {
          throw new Error('Ошибка регистрации пользователя')
        }

        // 2. Создание клиента с привязкой к пользователю
        const clientResponse = await api.post('/clients', {
          data: {
            name: clientData.name,
            phone: clientData.phone,
            address: clientData.address || '',
            registrationDate: new Date().toISOString().split('T')[0],
            verified: false,
            user: registerResponse.data.user.id
          }
        })

        // 3. Обновляем пользователя, чтобы установить связь с клиентом
        await api.put(`/users/${registerResponse.data.user.id}`, {
          client: clientResponse.data.data.id
        })

        // 4. Автоматический вход
        return await this.loginWithEmail(email, password)

      } catch (error) {
        console.error('Ошибка регистрации:', error)
        this.error = error.response?.data?.error?.message ||
                   error.message ||
                   'Ошибка регистрации.'
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        localStorage.removeItem('user')
        localStorage.removeItem('jwt')
        this.user = null
        this.token = null
        this.status = 'out'
      } finally {
        this.loading = false
      }
    },

    // Обновление данных клиента
    async refreshClientData() {
      if (!this.isAuthenticated || !this.user?.id) {
        return
      }

      // Всегда пытаемся обновить данные клиента

      try {
        // Получаем свежие данные клиента - пробуем разные варианты фильтра
        let clientsResponse

        try {
          // Если у пользователя уже есть данные клиента, обновляем их
          if (this.user?.client?.id) {
            console.log('Обновляем данные существующего клиента:', this.user.client.id)
            try {
              // Получаем обновленные данные клиента по его ID
              const clientResponse = await api.get(`/clients/${this.user.client.id}?populate=*`)
              if (clientResponse.data?.data) {
                clientsResponse = { data: { data: [clientResponse.data.data] } }
                console.log('Данные клиента обновлены')
              } else {
                console.warn('Не удалось получить данные клиента по ID, пробуем найти по username/email')
                throw new Error('Client not found by ID')
              }
            } catch (error) {
              console.warn('Ошибка при получении клиента по ID:', error.message)
              // Если не удалось получить по ID, ищем по username/email
              const allClientsResponse = await api.get('/clients?populate=*')
              if (allClientsResponse.data?.data) {
                const userClient = allClientsResponse.data.data.find(client =>
                  client.username === this.user.username ||
                  client.email === this.user.email
                )
                if (userClient) {
                  clientsResponse = { data: { data: [userClient] } }
                  console.log('Клиент найден по username/email после неудачи с ID')
                } else {
                  console.warn('Клиент не найден ни по ID, ни по username/email')
                  return
                }
              } else {
                console.warn('Не удалось получить список клиентов')
                return
              }
            }
          } else {
            // Если данных клиента нет, получаем всех клиентов и ищем по другим критериям
            console.log('Данные клиента не найдены, ищем среди всех клиентов')
            const allClientsResponse = await api.get('/clients?populate=*')
            if (allClientsResponse.data?.data) {
              // Ищем клиента по username или email
              const userClient = allClientsResponse.data.data.find(client =>
                client.username === this.user.username ||
                client.email === this.user.email
              )
              if (userClient) {
                clientsResponse = { data: { data: [userClient] } }
                console.log('Клиент найден среди всех клиентов по username/email')
              } else {
                console.warn('Клиент для пользователя не найден среди всех клиентов')
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

          // Обновляем данные пользователя
          this.user = {
            ...this.user,
            client: clientData
          }

          // Сохраняем в localStorage
          localStorage.setItem('user', JSON.stringify(this.user))
          console.log('Данные клиента успешно обновлены')
        }
      } catch (error) {
        console.warn('Ошибка обновления данных клиента, но данные уже есть:', error.message)
        // Не выбрасываем ошибку, так как данные клиента могут уже быть загружены
      }
    },

    clearError() {
      this.error = null
    }
  }
})
