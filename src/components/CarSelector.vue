<template>
  <div v-if="clientCars.length > 1" class="mb-8">
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
        Выберите автомобиль
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          v-for="car in clientCars"
          :key="car.id"
          @click="$emit('select-car', car.id)"
          :class="[
            'p-4 border rounded-lg text-left transition-all duration-200',
            selectedCarId === car.id
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 shadow-md ring-2 ring-blue-500/30 dark:ring-blue-400/30'
              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm'
          ]"
        >
          <div class="font-medium text-gray-900 dark:text-white">
            {{ car.make }} {{ car.model }}
          </div>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ car.year }} г., {{ car.licensePlate }}
          </div>
          <div class="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {{ getOrdersCountForCar(car.id) }} заказов
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarSelector',
  props: {
    clientCars: {
      type: Array,
      default: () => []
    },
    selectedCarId: {
      type: [String, Number],
      default: null
    },
    clientOrders: {
      type: Array,
      default: () => []
    }
  },
  emits: ['select-car'],
  methods: {
    getOrdersCountForCar(carId) {
      return this.clientOrders.filter(order => {
        const orderCarId = order.car?.id || order.car

        // Если car не указан и это единственный автомобиль, считаем этот заказ
        if (!orderCarId && this.clientCars.length === 1 && this.clientCars[0].id === carId) {
          return true
        }

        return orderCarId === carId
      }).length
    }
  }
}
</script>
