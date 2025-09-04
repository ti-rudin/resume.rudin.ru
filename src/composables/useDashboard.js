import { ref, computed, onMounted, watch } from 'vue'
import { useClientStore } from '@/stores/client'

export function useDashboard() {
  const clientStore = useClientStore()

  // Reactive state
  const selectedCarId = ref(null)
  const expandedOrders = ref(new Set())
  const isRefreshing = ref(false)

  // Вычисляемые свойства
  const clientInfo = computed(() => clientStore.clientInfo)
  const clientCars = computed(() => clientStore.clientCars)
  const clientOrders = computed(() => clientStore.clientOrders)

  // Выбранный автомобиль
  const selectedCar = computed(() => {
    if (!selectedCarId.value) return null
    return clientCars.value.find(car => car.id === selectedCarId.value)
  })

  // Заказы для выбранного автомобиля
  const selectedCarOrders = computed(() => {
    if (!selectedCarId.value) {
      // Если один автомобиль, показываем все заказы
      if (clientCars.value.length === 1) {
        return clientOrders.value.filter(order =>
          order.orderstatus === 'in_progress' || order.orderstatus === 'completed'
        )
      }
      // Если автомобилей нет или не выбран, показываем пустой массив
      return []
    }

    // Фильтруем заказы по выбранному автомобилю и статусу
    const filtered = clientOrders.value.filter(order => {
      const carId = order.car?.id || order.car

      // Если car не указан, показываем заказ для единственного автомобиля
      if (!carId && clientCars.value.length === 1) {
        return order.orderstatus === 'in_progress' || order.orderstatus === 'completed'
      }

      // Проверяем автомобиль и статус
      const carMatch = carId === selectedCarId.value
      const statusMatch = order.orderstatus === 'in_progress' || order.orderstatus === 'completed'

      return carMatch && statusMatch
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    return filtered
  })

  // Автоматический выбор автомобиля при загрузке
  watch(clientCars, (newCars) => {
    if (newCars.length === 1 && !selectedCarId.value) {
      // Если один автомобиль, выбираем его автоматически
      selectedCarId.value = newCars[0].id
    } else if (newCars.length > 1 && !selectedCarId.value) {
      // Если несколько автомобилей, выбираем первый
      selectedCarId.value = newCars[0].id
    }
  }, { immediate: true })

  // Загрузка данных при монтировании
  onMounted(async () => {
    try {
      await clientStore.fetchClientData()
    } catch (error) {
      console.error('Ошибка загрузки данных:', error)
    }
  })

  // Функции для управления состоянием карточек
  const isOrderExpanded = (orderId) => {
    return expandedOrders.value.has(orderId)
  }

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrders.value.has(orderId)) {
      expandedOrders.value.delete(orderId)
    } else {
      expandedOrders.value.add(orderId)
    }
  }

  // Функция обновления данных
  const refreshData = async () => {
    isRefreshing.value = true
    try {
      // Сохраняем текущий выбранный автомобиль
      const currentSelectedCarId = selectedCarId.value

      await clientStore.refreshClientData()

      // После обновления данных, если был выбран автомобиль, пытаемся выбрать его снова
      if (currentSelectedCarId) {
        const carExists = clientCars.value.some(car => car.id === currentSelectedCarId)
        if (carExists) {
          selectedCarId.value = currentSelectedCarId
        } else if (clientCars.value.length > 0) {
          // Если сохраненный автомобиль не найден, выбираем первый доступный
          selectedCarId.value = clientCars.value[0].id
        }
      }
    } catch (error) {
      console.error('Ошибка обновления данных:', error)
    } finally {
      isRefreshing.value = false
    }
  }

  return {
    clientInfo,
    clientCars,
    clientOrders,
    selectedCarId,
    selectedCar,
    selectedCarOrders,
    expandedOrders,
    isRefreshing,
    isOrderExpanded,
    toggleOrderExpansion,
    refreshData
  }
}
