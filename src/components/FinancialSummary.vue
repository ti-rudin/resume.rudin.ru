<template>
  <div v-if="selectedCarOrders.length > 0" class="mb-8">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-indigo-500">
      <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Финансы</h2>

      <div class="grid grid-cols-3 gap-4">
        <!-- Работы -->
        <div class="text-center">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Работы</span>
          </div>
          <div class="text-xl font-bold text-blue-600 dark:text-blue-400">
            {{ formatCurrency(financialSummary.mainPlan.works) }}
          </div>
        </div>

        <!-- Запчасти -->
        <div class="text-center">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-6 h-6 mr-2 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Запчасти</span>
          </div>
          <div class="text-xl font-bold text-green-600 dark:text-green-400">
            {{ formatCurrency(financialSummary.mainPlan.parts) }}
          </div>
        </div>

        <!-- Итого -->
        <div class="text-center">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-6 h-6 mr-2 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Итого</span>
          </div>
          <div class="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            {{ formatCurrency(financialSummary.mainPlan.total) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialSummary',
  props: {
    selectedCarOrders: {
      type: Array,
      default: () => []
    },
    financialSummary: {
      type: Object,
      default: () => ({
        mainPlan: { works: 0, parts: 0, total: 0 },
        recommendations: { works: 0, parts: 0, total: 0 },
        overall: { works: 0, parts: 0, total: 0 }
      })
    }
  },
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount || 0)
    }
  }
}
</script>
