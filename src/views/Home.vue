<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img src="/rudin.jpeg" alt="Рудин Александр" class="w-full h-full object-cover" />
      </div>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Рудин Александр
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-6">
        Full-Stack разработчик
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <button @click="downloadPDF" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          Скачать PDF
        </button>
        <a href="mailto:ax.rudin@gmail.com" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email
        </a>
        <a href="tel:+79651050211" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          +7 (965) 105-02-11
        </a>
        <a href="https://t.me/a_rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
        <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>

    <!-- About -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Обо мне</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Full-stack разработчик с опытом работы более 20-ти лет. Специализируюсь на разработке современных веб-приложений
        с использованием JavaScript экосистемы. Имею опыт работы с Vue.js, Svelte, React, Node.js и различными базами данных.
      </p>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Успешно реализовал множество проектов от концепции до production. Активно изучаю новые технологии
        и применяю лучшие практики разработки. Готов к интересным проектам и сложным задачам.
      </p>
    </div>

    <!-- Skills -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Навыки</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-white">Frontend</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Vue.js, Svelte, React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS
          </p>
        </div>
        <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-white">Backend</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Strapi, Node-Red, Node.js, Express.js, MongoDB, Redis, GraphQL
          </p>
        </div>
        <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-white">DevOps & Tools</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Docker, Git, Linux, REST API
          </p>
        </div>
        <div class="text-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-white">Дополнительно</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Agile/Scrum, Unit Testing, CI/CD
          </p>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Опыт работы</h2>
      <div class="space-y-6">
        <div class="border-l-4 border-blue-500 pl-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Самозанятый разработчик</h3>
          <p class="text-blue-600 dark:text-blue-400">Самозанятый • 2025 - настоящее время</p>
          <ul class="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Разработка веб-приложений и систем автоматизации</li>
            <li>Создание высоконагруженных торговых систем</li>
            <li>Интеграция с внешними API и сервисами</li>
            <li>Консультации по техническим решениям</li>
          </ul>
        </div>
        <div class="border-l-4 border-green-500 pl-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Фронтенд-программист</h3>
          <p class="text-green-600 dark:text-green-400">БЕРГ (оптовая продажа запчастей) • 2022 - 2025</p>
          <ul class="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Разработка пользовательских интерфейсов для внутренних систем</li>
            <li>Интеграция с системами учета и складского управления</li>
            <li>Оптимизация интерфейсов для работы с большим объемом данных</li>
            <li>Работа по контракту</li>
          </ul>
        </div>
        <div class="border-l-4 border-purple-500 pl-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Руководитель веб-отдела</h3>
          <p class="text-purple-600 dark:text-purple-400">Визард (Тверь) • 2020</p>
          <ul class="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Управление командой веб-разработчиков</li>
            <li>Планирование и координация веб-проектов</li>
            <li>Внедрение новых технологий и методологий</li>
            <li>Контроль качества и сроков выполнения работ</li>
          </ul>
        </div>
        <div class="border-l-4 border-orange-500 pl-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Системный администратор</h3>
          <p class="text-orange-600 dark:text-orange-400">SAF-HOLLAND • 2005 - 2022</p>
          <ul class="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>Администрирование серверной инфраструктуры</li>
            <li>Поддержка и оптимизация IT-систем предприятия</li>
            <li>Обеспечение бесперебойной работы корпоративных сервисов</li>
            <li>Внедрение систем мониторинга и резервного копирования</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Проекты</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm">
        Полностью разработаны мной самостоятельно
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🔧 Автосервис AI
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Интегрированная система управления заказ-нарядами с ИИ. Включает приложения для клиента,
            инженера и менеджера. Автоматизация процессов, аналитика и предиктивное обслуживание.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Vue.js</span>

            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Strapi 5</span>
            <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Yandex GPT</span>

          </div>
        </div>
        <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🤖 Автоматизированная система торговли на Binance
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Высокопроизводительная система для автоматической торговли с поддержкой неограниченного количества торговых пар.
            Реализована система распределенной очереди.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Node.js</span>
            <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Express.js</span>
            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Binance API</span>
            <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">MongoDB</span>
            <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">Redis</span>
          </div>
        </div>
        <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🏠 Умный дом
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Система автоматизации жилых и коммерческих помещений на базе WirenBoard.
            Управление освещением, отоплением, безопасностью и мультимедиа.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">JavaScript</span>
            <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Node.js</span>
            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">MQTT</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded">WirenBoard</span>
          </div>
        </div>
        <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            🎤 Концертный софт
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Комплексная система для организации концертов и мероприятий. Три кабинета для зрителей,
            артистов и организаторов с интеграцией VK и рейтингом артистов.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Vue.js</span>
            <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Node.js</span>
            <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">VK API</span>
            <span class="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">WebSocket</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Связаться со мной</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        Готов обсудить интересные проекты и возможности сотрудничества
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <a href="mailto:ax.rudin@gmail.com" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email
        </a>
        <a href="tel:+79651050211" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          +7 (965) 105-02-11
        </a>
        <a href="https://t.me/a_rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
        <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    downloadPDF() {
      const link = document.createElement('a')
      link.href = '/resume-alexander-rudin.pdf'
      link.download = 'resume-alexander-rudin.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
</script>

<style>
/* Здесь можно добавить стили, если это необходимо */
</style>
