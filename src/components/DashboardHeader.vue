<template>
  <div class="mb-8">
    <div class="flex justify-between items-start">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          Добро пожаловать, {{ clientInfo?.name || 'Клиент' }}!
        </h1>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          История обслуживания в нашем автоклубе
        </p>
      </div>
      <button
        @click="$emit('refresh')"
        :disabled="isRefreshing"
        class="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        <svg class="w-6 h-6 " :class="{ 'animate-spin': isRefreshing }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
   
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    clientInfo: {
      type: Object,
      default: () => ({})
    },
    isRefreshing: {
      type: Boolean,
      default: false
    }
  },
  emits: ['refresh']
}
</script>
