<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
          <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
            <img src="/rudin.jpeg" alt="Рудин Александр" class="w-full h-full object-cover" />
          </div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Рудин Александр
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Full-Stack разработчик
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap">
            <button @click="downloadPDF" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
              Скачать PDF
            </button>
            <a href="mailto:ax.rudin@gmail.com" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </a>
            <a href="tel:+79651050211" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <nobr>+7 (965) 105-02-11</nobr>
            </a>
            <a href="https://t.me/a_rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

    <!-- About -->
    <div class="mb-12">
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">Обо мне</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Full-stack разработчик с опытом работы более <span class="text-blue-600 dark:text-blue-400 font-semibold">20-ти лет</span>.
              Специализируюсь на разработке современных веб-приложений с использованием JavaScript экосистемы.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Успешно реализовал множество проектов от концепции до production. Активно изучаю новые технологии
              и применяю лучшие практики разработки.
            </p>
          </div>
          <div class="space-y-4">
            <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ключевые достижения</h3>
              <ul class="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li class="flex items-start">
                  <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span>Более 20 лет опыта в разработке</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span>50+ успешно реализованных проектов</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span>Эксперт в современных технологиях</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                  <span>Опыт управления командами</span>
                </li>
              </ul>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              Активно применяю <span class="text-blue-600 dark:text-blue-400 font-semibold">ИИ в программировании</span>, что позволило добиться
              значительного скачка производительности. Могу заменить целый отдел благодаря автоматизации.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-12">
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">Навыки</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-base">Frontend</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Vue.js, Svelte, React<br>
              JavaScript, TypeScript<br>
              HTML5, CSS3, Tailwind CSS
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-base">Backend</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Strapi, Node-Red<br>
              Node.js, Express.js<br>
              MongoDB, Redis, GraphQL
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-base">DevOps & Tools</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Docker, Git, Linux<br>
              REST API<br>
              Системное администрирование
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3 text-base">ИИ и Автоматизация</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              ChatGPT, GitHub Copilot<br>
              Claude, Yandex GPT<br>
              Автоматизация процессов
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="mb-12">
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">Опыт работы</h2>
        <div class="space-y-4">
          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Самозанятый разработчик</h3>
              <p class="text-blue-600 dark:text-blue-400 text-sm font-medium">Самозанятый • 2025 - настоящее время</p>
            </div>
            <ul class="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Разработка веб-приложений и систем автоматизации</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Создание высоконагруженных торговых систем</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Интеграция с внешними API и сервисами</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Консультации по техническим решениям</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Фронтенд-программист</h3>
              <p class="text-blue-600 dark:text-blue-400 text-sm font-medium">БЕРГ (оптовая продажа запчастей) • 2022 - 2025</p>
            </div>
            <ul class="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Разработка пользовательских интерфейсов для внутренних систем</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Интеграция с системами учета и складского управления</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Оптимизация интерфейсов для работы с большим объемом данных</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Работа по контракту</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Руководитель веб-отдела</h3>
              <p class="text-blue-600 dark:text-blue-400 text-sm font-medium">Визард (Тверь) • 2020</p>
            </div>
            <ul class="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Управление командой веб-разработчиков</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Планирование и координация веб-проектов</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Внедрение новых технологий и методологий</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Контроль качества и сроков выполнения работ</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">Системный администратор</h3>
              <p class="text-blue-600 dark:text-blue-400 text-sm font-medium">SAF-HOLLAND • 2005 - 2022</p>
            </div>
            <ul class="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Администрирование серверной инфраструктуры</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Поддержка и оптимизация IT-систем предприятия</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Обеспечение бесперебойной работы корпоративных сервисов</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                <span>Внедрение систем мониторинга и резервного копирования</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="mb-12">
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2 pb-3 border-b border-gray-200 dark:border-gray-700">Проекты</h2>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 mt-2">
          Полностью разработаны мной самостоятельно
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">AI-Журналист САМУРАЙ</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              Платформа для автоматизации создания контента с использованием искусственного интеллекта.
              Генерация постов с изображениями, публикация на различных площадках, управление медиатекой и планирование публикаций.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Vue.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Node.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">ИИ</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">API</span>
            </div>
            <a href="https://samuraiai.ru/about" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Посмотреть проект
            </a>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Автосервис AI</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              Интегрированная система управления заказ-нарядами с ИИ. Включает приложения для клиента,
              инженера и менеджера. Автоматизация процессов, аналитика и предиктивное обслуживание.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Vue.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Strapi 5</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Yandex GPT</span>
            </div>
            <a href="https://ti-soft.ru/auto-service-ai" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Посмотреть проект
            </a>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Автоматизированная система торговли криптовалютой</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              Высокопроизводительная система для автоматической торговли с поддержкой неограниченного количества торговых пар.
              Реализована система распределенной очереди.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Node.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Express.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Binance API</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">MongoDB</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Redis</span>
            </div>
            <a href="https://ti-soft.ru/case-binance-tsl" target="_blank" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Посмотреть проект
            </a>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Умный дом</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              Система автоматизации жилых и коммерческих помещений на базе WirenBoard.
              Управление освещением, отоплением, безопасностью и мультимедиа.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">JavaScript</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Node.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">MQTT</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">WirenBoard</span>
            </div>
          </div>

          <div class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Концертный софт</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm">
              Комплексная система для организации концертов и мероприятий. Три кабинета для зрителей,
              артистов и организаторов с интеграцией VK и рейтингом артистов.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Vue.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">Node.js</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">VK API</span>
              <span class="px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded border border-blue-200 dark:border-blue-800">WebSocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="mb-12">
      <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">Связаться со мной</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-6 text-sm">
          Готов обсудить интересные проекты и возможности сотрудничества
        </p>
        <div class="flex flex-col sm:flex-row justify-center items-center gap-3 flex-wrap">
          <a href="mailto:ax.rudin@gmail.com" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            ax.rudin@gmail.com
          </a>

          <a href="tel:+79651050211" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            +7 (965) 105-02-11
          </a>

          <a href="https://t.me/a_rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            @a_rudin
          </a>

          <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            ti-rudin
          </a>
        </div>
      </div>
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
