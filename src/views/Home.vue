<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header -->
      <div class="text-center mb-16 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl"></div>
        <div class="relative backdrop-blur-xl bg-white dark:bg-gray-900 border border-white rounded-3xl p-8 shadow-2xl">
          <div class="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white">
            <img src="/rudin.jpeg" alt="Рудин Александр" class="w-full h-full object-cover" />
          </div>
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Рудин Александр
          </h1>
          <p class="text-xl text-gray-700 dark:text-blue-200 mb-8 font-light">
            Full-Stack разработчик
          </p>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
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
          <nobr>+7 (965) 105-02-11</nobr>
        </a>
        <a href="https://t.me/a_rudin" target="_blank" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
        <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-6 py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white font-medium rounded-xl shadow-lg hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
          </div>
        </div>
      </div>

    <!-- About -->
    <div class="relative mb-16">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-3xl blur-3xl"></div>
      <div class="relative backdrop-blur-xl bg-white/5 dark:bg-white/10 border border-white/10 dark:border-white/20 rounded-3xl p-8 shadow-2xl">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Обо мне</h2>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <p class="text-gray-800 dark:text-white leading-relaxed text-lg">
              Full-stack разработчик с опытом работы более <span class="text-cyan-600 dark:text-cyan-300 font-semibold">20-ти лет</span>.
              Специализируюсь на разработке современных веб-приложений с использованием JavaScript экосистемы.
            </p>
            <p class="text-gray-700 dark:text-gray-200 leading-relaxed">
              Успешно реализовал множество проектов от концепции до production. Активно изучаю новые технологии
              и применяю лучшие практики разработки.
            </p>
          </div>
          <div class="space-y-6">
            <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🚀 Ключевые достижения</h3>
              <ul class="text-gray-700 dark:text-gray-200 space-y-2">
                <li>• Более 20 лет опыта в разработке</li>
                <li>• 50+ успешно реализованных проектов</li>
                <li>• Эксперт в современных технологиях</li>
                <li>• Опыт управления командами</li>
              </ul>
            </div>
            <p class="text-gray-800 dark:text-white leading-relaxed">
              Активно применяю <span class="text-purple-600 dark:text-purple-300 font-semibold">ИИ в программировании</span>, что позволило добиться
              значительного скачка производительности. Могу заменить целый отдел благодаря автоматизации.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Навыки</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-4xl mb-4 text-center">⚛️</div>
          <h3 class="font-bold text-gray-900 dark:text-white text-center mb-3">Frontend</h3>
          <p class="text-gray-700 dark:text-gray-200 text-sm text-center leading-relaxed">
            Vue.js, Svelte, React<br>
            JavaScript, TypeScript<br>
            HTML5, CSS3, Tailwind CSS
          </p>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-4xl mb-4 text-center">🚀</div>
          <h3 class="font-bold text-gray-900 dark:text-white text-center mb-3">Backend</h3>
          <p class="text-gray-700 dark:text-gray-200 text-sm text-center leading-relaxed">
            Strapi, Node-Red<br>
            Node.js, Express.js<br>
            MongoDB, Redis, GraphQL
          </p>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-4xl mb-4 text-center">🛠️</div>
          <h3 class="font-bold text-gray-900 dark:text-white text-center mb-3">DevOps & Tools</h3>
          <p class="text-gray-700 dark:text-gray-200 text-sm text-center leading-relaxed">
            Docker, Git, Linux<br>
            REST API<br>
            Системное администрирование
          </p>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-4xl mb-4 text-center">🤖</div>
          <h3 class="font-bold text-gray-900 dark:text-white text-center mb-3">ИИ и Автоматизация</h3>
          <p class="text-gray-700 dark:text-gray-200 text-sm text-center leading-relaxed">
            ChatGPT, GitHub Copilot<br>
            Claude, Yandex GPT<br>
            Автоматизация процессов
          </p>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Опыт работы</h2>
      <div class="space-y-6">
        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">🚀 Самозанятый разработчик</h3>
              <p class="text-cyan-600 dark:text-cyan-400 font-medium">Самозанятый • 2025 - настоящее время</p>
            </div>
            <div class="text-2xl">💼</div>
          </div>
          <ul class="text-gray-700 dark:text-gray-200 space-y-2">
            <li class="flex items-start"><span class="text-cyan-600 dark:text-cyan-300 mr-2">•</span>Разработка веб-приложений и систем автоматизации</li>
            <li class="flex items-start"><span class="text-cyan-600 dark:text-cyan-300 mr-2">•</span>Создание высоконагруженных торговых систем</li>
            <li class="flex items-start"><span class="text-cyan-600 dark:text-cyan-300 mr-2">•</span>Интеграция с внешними API и сервисами</li>
            <li class="flex items-start"><span class="text-cyan-600 dark:text-cyan-300 mr-2">•</span>Консультации по техническим решениям</li>
          </ul>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">💻 Фронтенд-программист</h3>
              <p class="text-emerald-600 dark:text-emerald-300 font-medium">БЕРГ (оптовая продажа запчастей) • 2022 - 2025</p>
            </div>
            <div class="text-2xl">🏢</div>
          </div>
          <ul class="text-gray-700 dark:text-gray-200 space-y-2">
            <li class="flex items-start"><span class="text-emerald-600 dark:text-emerald-300 mr-2">•</span>Разработка пользовательских интерфейсов для внутренних систем</li>
            <li class="flex items-start"><span class="text-emerald-600 dark:text-emerald-300 mr-2">•</span>Интеграция с системами учета и складского управления</li>
            <li class="flex items-start"><span class="text-emerald-600 dark:text-emerald-300 mr-2">•</span>Оптимизация интерфейсов для работы с большим объемом данных</li>
            <li class="flex items-start"><span class="text-emerald-600 dark:text-emerald-300 mr-2">•</span>Работа по контракту</li>
          </ul>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">👔 Руководитель веб-отдела</h3>
              <p class="text-purple-600 dark:text-purple-300 font-medium">Визард (Тверь) • 2020</p>
            </div>
            <div class="text-2xl">🏛️</div>
          </div>
          <ul class="text-gray-700 dark:text-gray-200 space-y-2">
            <li class="flex items-start"><span class="text-purple-600 dark:text-purple-300 mr-2">•</span>Управление командой веб-разработчиков</li>
            <li class="flex items-start"><span class="text-purple-600 dark:text-purple-300 mr-2">•</span>Планирование и координация веб-проектов</li>
            <li class="flex items-start"><span class="text-purple-600 dark:text-purple-300 mr-2">•</span>Внедрение новых технологий и методологий</li>
            <li class="flex items-start"><span class="text-purple-600 dark:text-purple-300 mr-2">•</span>Контроль качества и сроков выполнения работ</li>
          </ul>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">🖥️ Системный администратор</h3>
              <p class="text-orange-600 dark:text-orange-300 font-medium">SAF-HOLLAND • 2005 - 2022</p>
            </div>
            <div class="text-2xl">🔧</div>
          </div>
          <ul class="text-gray-700 dark:text-gray-200 space-y-2">
            <li class="flex items-start"><span class="text-orange-600 dark:text-orange-300 mr-2">•</span>Администрирование серверной инфраструктуры</li>
            <li class="flex items-start"><span class="text-orange-600 dark:text-orange-300 mr-2">•</span>Поддержка и оптимизация IT-систем предприятия</li>
            <li class="flex items-start"><span class="text-orange-600 dark:text-orange-300 mr-2">•</span>Обеспечение бесперебойной работы корпоративных сервисов</li>
            <li class="flex items-start"><span class="text-orange-600 dark:text-orange-300 mr-2">•</span>Внедрение систем мониторинга и резервного копирования</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Проекты</h2>
      <p class="text-gray-600 dark:text-gray-300 text-center mb-8 text-sm">
        Полностью разработаны мной самостоятельно
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl mb-4">🔧</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Автосервис AI</h3>
          <p class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
            Интегрированная система управления заказ-нарядами с ИИ. Включает приложения для клиента,
            инженера и менеджера. Автоматизация процессов, аналитика и предиктивное обслуживание.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full border border-blue-400">Vue.js</span>
            <span class="px-3 py-1 bg-purple-500 text-white text-xs rounded-full border border-purple-400">Strapi 5</span>
            <span class="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full border border-yellow-400">Yandex GPT</span>
          </div>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl mb-4">🤖</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Автоматизированная система торговли криптовалютой</h3>
          <p class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
            Высокопроизводительная система для автоматической торговли с поддержкой неограниченного количества торговых пар.
            Реализована система распределенной очереди.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-green-500 text-white text-xs rounded-full border border-green-400">Node.js</span>
            <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full border border-blue-400">Express.js</span>
            <span class="px-3 py-1 bg-purple-500 text-white text-xs rounded-full border border-purple-400">Binance API</span>
            <span class="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full border border-yellow-400">MongoDB</span>
            <span class="px-3 py-1 bg-red-500 text-white text-xs rounded-full border border-red-400">Redis</span>
          </div>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl mb-4">🏠</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Умный дом</h3>
          <p class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
            Система автоматизации жилых и коммерческих помещений на базе WirenBoard.
            Управление освещением, отоплением, безопасностью и мультимедиа.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full border border-blue-400">JavaScript</span>
            <span class="px-3 py-1 bg-green-500 text-white text-xs rounded-full border border-green-400">Node.js</span>
            <span class="px-3 py-1 bg-purple-500 text-white text-xs rounded-full border border-purple-400">MQTT</span>
            <span class="px-3 py-1 bg-orange-500 text-white text-xs rounded-full border border-orange-400">WirenBoard</span>
          </div>
        </div>

        <div class="bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <div class="text-3xl mb-4">🎤</div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Концертный софт</h3>
          <p class="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
            Комплексная система для организации концертов и мероприятий. Три кабинета для зрителей,
            артистов и организаторов с интеграцией VK и рейтингом артистов.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full border border-blue-400">Vue.js</span>
            <span class="px-3 py-1 bg-green-500 text-white text-xs rounded-full border border-green-400">Node.js</span>
            <span class="px-3 py-1 bg-purple-500 text-white text-xs rounded-full border border-purple-400">VK API</span>
            <span class="px-3 py-1 bg-red-500 text-white text-xs rounded-full border border-red-400">WebSocket</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Связаться со мной</h2>
      <p class="text-gray-700 dark:text-gray-200 mb-8 text-lg text-center">
        Готов обсудить интересные проекты и возможности сотрудничества
      </p>
      <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <a href="mailto:ax.rudin@gmail.com" class="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          ax.rudin@gmail.com
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
          @a_rudin
        </a>

        <a href="https://github.com/ti-rudin" target="_blank" class="inline-flex items-center px-6 py-3 bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white font-medium rounded-xl shadow-lg hover:bg-white/15 dark:hover:bg-white/20 transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          ti-rudin
        </a>
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
