import { computed } from 'vue'

export function useOrderFormatting() {
  // Форматирование даты
  const formatDate = (dateStr, full = false) => {
    if (!dateStr) return '-'
    const date = new Date(dateStr)
    if (full) {
      return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  // Форматирование валюты
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0)
  }

  // Цвета статусов
  const getStatusColor = (status) => {
    const colors = {
      'new': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'in_progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'cancelled': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'suspended': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'deleted': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
    return colors[status] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
  }

  // Текстовые статусы
  const getStatusText = (status) => {
    const texts = {
      'new': 'Новый',
      'in_progress': 'В работе',
      'completed': 'Завершен',
      'cancelled': 'Отменен',
      'suspended': 'Приостановлен',
      'deleted': 'Удален'
    }
    return texts[status] || status
  }

  // Статусы работ
  const getWorkStatusText = (status) => {
    const texts = {
      'pending': 'Ожидает',
      'in_progress': 'В работе',
      'completed': 'Завершена'
    }
    return texts[status] || status
  }

  // Функции для разделения работ по типам
  const getMainPlanWorks = (order) => {
    if (!order.works) return []
    return order.works.filter(work => !work.isRecomended)
  }

  const getRecommendedWorks = (order) => {
    if (!order.works) return []
    return order.works.filter(work => work.isRecomended)
  }

  // Функции для разделения запчастей по типам
  const getMainPlanParts = (order) => {
    if (!order.parts) return []
    return order.parts.filter(part => !part.isRecomended)
  }

  const getRecommendedParts = (order) => {
    if (!order.parts) return []
    return order.parts.filter(part => part.isRecomended)
  }

  // Функции для расчета стоимости заказа
  const getOrderMainPlanWorksCost = (order) => {
    return getMainPlanWorks(order).reduce((total, work) => total + (parseFloat(work.cost) || 0), 0)
  }

  const getOrderMainPlanPartsCost = (order) => {
    return getMainPlanParts(order).reduce((total, part) => total + ((parseFloat(part.price) || 0) * (parseFloat(part.quantity) || 1)), 0)
  }

  const getOrderMainPlanTotalCost = (order) => {
    return getOrderMainPlanWorksCost(order) + getOrderMainPlanPartsCost(order)
  }

  const getOrderRecommendedWorksCost = (order) => {
    return getRecommendedWorks(order).reduce((total, work) => total + (parseFloat(work.cost) || 0), 0)
  }

  const getOrderRecommendedPartsCost = (order) => {
    return getRecommendedParts(order).reduce((total, part) => total + ((parseFloat(part.price) || 0) * (parseFloat(part.quantity) || 1)), 0)
  }

  const getOrderRecommendedTotalCost = (order) => {
    return getOrderRecommendedWorksCost(order) + getOrderRecommendedPartsCost(order)
  }

  const getOrderTotalWorksCost = (order) => {
    return (order.works || []).reduce((total, work) => total + (parseFloat(work.cost) || 0), 0)
  }

  const getOrderTotalPartsCost = (order) => {
    return (order.parts || []).reduce((total, part) => total + ((parseFloat(part.price) || 0) * (parseFloat(part.quantity) || 1)), 0)
  }

  const getOrderTotalCost = (order) => {
    return getOrderTotalWorksCost(order) + getOrderTotalPartsCost(order)
  }

  return {
    formatDate,
    formatCurrency,
    getStatusColor,
    getStatusText,
    getWorkStatusText,
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
    getOrderTotalWorksCost,
    getOrderTotalPartsCost,
    getOrderTotalCost
  }
}
