<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <DashboardHeader
      :client-info="clientInfo"
      :is-refreshing="isRefreshing"
      @refresh="refreshData"
    />

    <!-- Фильтр по дате -->
    <div class="mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-0">
          Заказы
        </h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in dateFilters"
            :key="filter.value"
            @click="selectedDateFilter = filter.value"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              selectedDateFilter === filter.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>


    </div>

    <CarSelector
      :client-cars="clientCars"
      :selected-car-id="selectedCarId"
      :client-orders="clientOrders"
      @select-car="selectedCarId = $event"
    />

    <FinancialSummary
      :selected-car-orders="selectedCarOrders"
      :financial-summary="financialSummary"
    />

    <OrderList
      :selected-car-orders="selectedCarOrders"
      :selected-car="selectedCar"
      :expanded-orders="expandedOrders"
      :format-date="formatDate"
      :get-status-color="getStatusColor"
      :get-status-text="getStatusText"
      :get-work-status-text="getWorkStatusText"
      :format-currency="formatCurrency"
      :get-main-plan-works="getMainPlanWorks"
      :get-recommended-works="getRecommendedWorks"
      :get-main-plan-parts="getMainPlanParts"
      :get-recommended-parts="getRecommendedParts"
      :get-order-main-plan-works-cost="getOrderMainPlanWorksCost"
      :get-order-main-plan-parts-cost="getOrderMainPlanPartsCost"
      :get-order-main-plan-total-cost="getOrderMainPlanTotalCost"
      :get-order-recommended-works-cost="getOrderRecommendedWorksCost"
      :get-order-recommended-parts-cost="getOrderRecommendedPartsCost"
      :get-order-recommended-total-cost="getOrderRecommendedTotalCost"
      @toggle-expansion="toggleOrderExpansion"
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import DashboardHeader from '@/components/DashboardHeader.vue'
import CarSelector from '@/components/CarSelector.vue'
import FinancialSummary from '@/components/FinancialSummary.vue'
import OrderList from '@/components/OrderList.vue'
import { useDashboard } from '@/composables/useDashboard'
import { useOrderFormatting } from '@/composables/useOrderFormatting'

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    CarSelector,
    FinancialSummary,
    OrderList
  },
  setup() {
    const {
      clientInfo,
      clientCars,
      clientOrders,
      selectedCarId,
      selectedCar,
      expandedOrders,
      isRefreshing,
      isOrderExpanded,
      toggleOrderExpansion,
      refreshData
    } = useDashboard()

    // Фильтр по дате
    const selectedDateFilter = ref('currentYear')

    const dateFilters = [
      { value: 'currentYear', label: 'Текущий год' },
      { value: 'allTime', label: 'За все время' }
    ]

    // Фильтрация заказов по дате
    const selectedCarOrders = computed(() => {
      if (!selectedCarId.value) {
        // Если один автомобиль, показываем все заказы
        if (clientCars.value.length === 1) {
          return filterOrdersByDate(clientOrders.value.filter(order =>
            order.orderstatus === 'in_progress' || order.orderstatus === 'completed'
          ))
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

      return filterOrdersByDate(filtered)
    })

    // Функция фильтрации заказов по дате
    const filterOrdersByDate = (orders) => {
      const now = new Date()
      const currentYear = now.getFullYear()

      switch (selectedDateFilter.value) {
        case 'currentYear':
          return orders.filter(order => {
            const orderDate = new Date(order.createdAt)
            return orderDate.getFullYear() === currentYear
          })
        case 'allTime':
        default:
          return orders
      }
    }

    const {
      formatDate,
      getStatusColor,
      getStatusText,
      getWorkStatusText,
      formatCurrency,
      getMainPlanWorks,
      getRecommendedWorks,
      getMainPlanParts,
      getRecommendedParts,
      getOrderMainPlanWorksCost,
      getOrderMainPlanPartsCost,
      getOrderMainPlanTotalCost,
      getOrderRecommendedWorksCost,
      getOrderRecommendedPartsCost,
      getOrderRecommendedTotalCost
    } = useOrderFormatting()

    // Финансовая сводка
    const financialSummary = computed(() => {
      const summary = {
        mainPlan: { works: 0, parts: 0, total: 0 },
        recommendations: { works: 0, parts: 0, total: 0 },
        overall: { works: 0, parts: 0, total: 0 }
      }

      selectedCarOrders.value.forEach(order => {
        // Обрабатываем работы
        if (order.works && order.works.length > 0) {
          order.works.forEach(work => {
            const cost = parseFloat(work.cost) || 0
            if (work.isRecomended) {
              summary.recommendations.works += cost
            } else {
              summary.mainPlan.works += cost
            }
            summary.overall.works += cost
          })
        }

        // Обрабатываем запчасти
        if (order.parts && order.parts.length > 0) {
          order.parts.forEach(part => {
            const cost = (parseFloat(part.price) || 0) * (parseFloat(part.quantity) || 1)
            if (part.isRecomended) {
              summary.recommendations.parts += cost
            } else {
              summary.mainPlan.parts += cost
            }
            summary.overall.parts += cost
          })
        }
      })

      // Вычисляем итоговые суммы
      summary.mainPlan.total = summary.mainPlan.works + summary.mainPlan.parts
      summary.recommendations.total = summary.recommendations.works + summary.recommendations.parts
      summary.overall.total = summary.overall.works + summary.overall.parts

      return summary
    })

    return {
      clientInfo,
      clientCars,
      clientOrders,
      selectedCarId,
      selectedCar,
      selectedCarOrders,
      financialSummary,
      expandedOrders,
      isRefreshing,
      selectedDateFilter,
      dateFilters,
      formatDate,
      getStatusColor,
      getStatusText,
      getWorkStatusText,
      formatCurrency,
      getMainPlanWorks,
      getRecommendedWorks,
      getMainPlanParts,
      getRecommendedParts,
      getOrderMainPlanWorksCost,
      getOrderMainPlanPartsCost,
      getOrderMainPlanTotalCost,
      getOrderRecommendedWorksCost,
      getOrderRecommendedPartsCost,
      getOrderRecommendedTotalCost,
      toggleOrderExpansion,
      refreshData
    }
  }
}
</script>
