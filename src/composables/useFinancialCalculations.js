import { computed } from 'vue'

export function useFinancialCalculations(selectedCarOrders) {
  // Финансовая сводка для выбранного автомобиля
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

  // Функция для подсчета заказов для автомобиля
  const getOrdersCountForCar = (carId, clientOrders, clientCars) => {
    return clientOrders.value.filter(order => {
      const orderCarId = order.car?.id || order.car

      // Если car не указан и это единственный автомобиль, считаем этот заказ
      if (!orderCarId && clientCars.value.length === 1 && clientCars.value[0].id === carId) {
        return true
      }

      return orderCarId === carId
    }).length
  }

  return {
    financialSummary,
    getOrdersCountForCar
  }
}
