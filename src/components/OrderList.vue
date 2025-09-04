<template>
  <div class="space-y-6">
    <div v-if="selectedCarOrders.length === 0" class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 text-center border border-gray-200 dark:border-gray-700">
      <svg class="mx-auto h-16 w-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <h3 class="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {{ selectedCar ? `Нет заказов для ${selectedCar.make} ${selectedCar.model}` : 'Нет заказов' }}
      </h3>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        История обслуживания появится здесь после создания первого заказа
      </p>
    </div>

    <div v-else class="space-y-6">
      <OrderCard
        v-for="order in selectedCarOrders"
        :key="order.id"
        :order="order"
        :is-expanded="isOrderExpanded(order.id)"
        @toggle-expansion="toggleOrderExpansion(order.id)"
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
      />
    </div>
  </div>
</template>

<script>
import OrderCard from './OrderCard.vue'

export default {
  name: 'OrderList',
  components: {
    OrderCard
  },
  props: {
    selectedCarOrders: {
      type: Array,
      default: () => []
    },
    selectedCar: {
      type: Object,
      default: null
    },
    expandedOrders: {
      type: Set,
      default: () => new Set()
    },
    formatDate: {
      type: Function,
      required: true
    },
    getStatusColor: {
      type: Function,
      required: true
    },
    getStatusText: {
      type: Function,
      required: true
    },
    getWorkStatusText: {
      type: Function,
      required: true
    },
    formatCurrency: {
      type: Function,
      required: true
    },
    getMainPlanWorks: {
      type: Function,
      required: true
    },
    getRecommendedWorks: {
      type: Function,
      required: true
    },
    getMainPlanParts: {
      type: Function,
      required: true
    },
    getRecommendedParts: {
      type: Function,
      required: true
    },
    getOrderMainPlanWorksCost: {
      type: Function,
      required: true
    },
    getOrderMainPlanPartsCost: {
      type: Function,
      required: true
    },
    getOrderMainPlanTotalCost: {
      type: Function,
      required: true
    },
    getOrderRecommendedWorksCost: {
      type: Function,
      required: true
    },
    getOrderRecommendedPartsCost: {
      type: Function,
      required: true
    },
    getOrderRecommendedTotalCost: {
      type: Function,
      required: true
    }
  },
  emits: ['toggle-expansion'],
  methods: {
    isOrderExpanded(orderId) {
      return this.expandedOrders.has(orderId)
    },
    toggleOrderExpansion(orderId) {
      this.$emit('toggle-expansion', orderId)
    }
  }
}
</script>
