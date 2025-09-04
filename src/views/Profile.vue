<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Заголовок -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Профиль пользователя
      </h1>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Управление личными данными и настройками
      </p>
    </div>

    <!-- Информация о пользователе -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Личная информация
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">


        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Имя клиента
          </label>
          <div class="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
            {{ clientInfo?.name || 'Не указано' }}
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Телефон
          </label>
          <div class="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
            {{ clientInfo?.phone || 'Не указано' }}
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Дата регистрации
          </label>
          <div class="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-md">
            {{ formatDate(clientInfo?.createdAt) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Информационное сообщение -->
    <div class="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
      <div class="flex items-start">
        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
        </svg>
        <div>
          <p class="text-sm text-blue-800 dark:text-blue-200">
            Если заметили ошибку или хотите внести изменения в информацию - обратитесь к менеджеру автоклуба
          </p>
        </div>
      </div>
    </div>

    <!-- Автомобили -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Мои автомобили
      </h2>

      <div v-if="clientCars.length === 0" class="text-center py-8">
        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">
          Нет зарегистрированных автомобилей
        </h3>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Автомобили появятся здесь после создания заказов
        </p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="car in clientCars"
          :key="car.id"
          class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 bg-white dark:bg-gray-800"
        >
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
            </svg>
            <span class="font-medium text-gray-900 dark:text-white">
              {{ car.make }} {{ car.model }}
            </span>
          </div>

          <div class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div>Год: {{ car.year }}</div>
            <div>VIN: {{ car.vin || 'Не указан' }}</div>
            <div>Гос. номер: {{ car.licensePlate || 'Не указан' }}</div>
            <div>Заказов: {{ getOrdersCountForCar(car.id) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопка выхода -->
    <div class="mt-8 flex justify-center">
      <button
        @click="handleLogout"
        class="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Выйти из аккаунта
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useClientStore } from '@/stores/client'
import { useRouter } from 'vue-router'

export default {
  name: 'Profile',
  setup() {
    const authStore = useAuthStore()
    const clientStore = useClientStore()
    const router = useRouter()

    // Computed properties
    const userEmail = computed(() => authStore.userEmail)
    const clientInfo = computed(() => clientStore.clientInfo)
    const clientCars = computed(() => clientStore.clientCars)
    const clientOrders = computed(() => clientStore.clientOrders)

    // Вычисляемые свойства для статистики
    const completedOrdersCount = computed(() => {
      return clientOrders.value.filter(order => order.orderstatus === 'completed').length
    })

    const totalSpent = computed(() => {
      return clientOrders.value.reduce((total, order) => {
        if (order.works) {
          total += order.works.reduce((workTotal, work) => workTotal + (parseFloat(work.cost) || 0), 0)
        }
        if (order.parts) {
          total += order.parts.reduce((partTotal, part) =>
            partTotal + ((parseFloat(part.price) || 0) * (parseFloat(part.quantity) || 1)), 0)
        }
        return total
      }, 0)
    })

    // Загрузка данных при монтировании
    onMounted(async () => {
      try {
        await clientStore.fetchClientData()
      } catch (error) {
        console.error('Ошибка загрузки данных профиля:', error)
      }
    })

    // Вспомогательные функции
    const formatDate = (dateStr) => {
      if (!dateStr) return 'Не указана'
      const date = new Date(dateStr)
      return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }

    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount || 0)
    }

    const getOrdersCountForCar = (carId) => {
      return clientOrders.value.filter(order => {
        const orderCarId = order.car?.id || order.car
        if (!orderCarId && clientCars.value.length === 1 && clientCars.value[0].id === carId) {
          return true
        }
        return orderCarId === carId
      }).length
    }

    // Функция выхода
    const handleLogout = async () => {
      try {
        await authStore.logout()
        clientStore.clearData()
        router.push('/')
      } catch (error) {
        console.error('Logout error:', error)
      }
    }

    return {
      userEmail,
      clientInfo,
      clientCars,
      clientOrders,
      completedOrdersCount,
      totalSpent,
      formatDate,
      formatCurrency,
      getOrdersCountForCar,
      handleLogout
    }
  }
}
</script>
