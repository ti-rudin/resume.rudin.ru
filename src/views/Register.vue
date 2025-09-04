<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Заголовок -->
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          Регистрация
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Уже есть аккаунт?
          <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Войти
          </router-link>
        </p>
      </div>

      <!-- Форма регистрации -->
      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email *
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="your@email.com"
          />
        </div>

        <!-- Пароль -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Пароль *
          </label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Минимум 6 символов"
          />
        </div>

        <!-- Имя -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Имя *
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Ваше имя"
          />
        </div>

        <!-- Телефон -->
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Телефон *
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="+7 (999) 999-99-99"
          />
        </div>

        <!-- Адрес -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Адрес
          </label>
          <textarea
            id="address"
            v-model="formData.address"
            rows="3"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Ваш адрес (необязательно)"
          ></textarea>
        </div>

        <!-- Сообщение об ошибке -->
        <div v-if="error" class="rounded-md bg-red-50 p-4 dark:bg-red-900">
          <div class="text-sm text-red-700 dark:text-red-300">
            {{ error }}
          </div>
        </div>

        <!-- Кнопка регистрации -->
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="absolute left-1/2 transform -translate-x-1/2">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            <span v-else>Зарегистрироваться</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useClientStore } from '@/stores/client'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    const clientStore = useClientStore()

    const formData = reactive({
      email: '',
      password: '',
      name: '',
      phone: '',
      address: ''
    })

    const loading = ref(false)
    const error = ref('')

    const handleRegister = async () => {
      loading.value = true
      error.value = ''

      try {
        await authStore.register(
          formData.email,
          formData.password,
          {
            name: formData.name,
            phone: formData.phone,
            address: formData.address
          }
        )

        // Загружаем данные клиента
        await clientStore.fetchClientData()

        // Перенаправляем на dashboard
        router.push('/dashboard')
      } catch (err) {
        error.value = err.message || 'Ошибка регистрации'
      } finally {
        loading.value = false
      }
    }

    return {
      formData,
      loading,
      error,
      handleRegister
    }
  }
}
</script>
