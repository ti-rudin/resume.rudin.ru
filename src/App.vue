<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-4">
            <router-link to="/">
             <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_14)">
                  <rect x="9" y="8" width="28" height="29" fill="#EA1111" />
                  <path
                    d="M27 13C26.7533 13.255 26.4316 13.6042 25.1179 15.0352C23.9172 16.3431 21.671 18.8635 20.4108 20.2846C19.1506 21.7058 18.947 21.954 18.8166 22.1245C18.5294 22.5 18 22.8122 18 22.8755C18 23.2966 18.3916 23.3348 18.5294 23.5C18.6672 23.6652 18.5294 23.5 20.1177 25C21.5055 26.3108 23.9172 28.6569 25.1179 29.9648C26.4316 31.3958 26.7533 31.745 27 32"
                    stroke="white" stroke-width="5" stroke-linecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_1_14">
                    <rect width="45" height="45" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </router-link>
          </div>

          <!-- Центрированное меню -->
          <div class="hidden md:flex flex-1 justify-center">
            <div class="flex space-x-2">
       

            </div>
          </div>

          <div class="flex items-center space-x-4">
            <!-- Theme toggle -->
            <button @click="toggleTheme" aria-label="Toggle Dark Mode"
              class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Profile button -->
            <router-link v-if="isAuthenticated" to="/profile" aria-label="Profile"
              class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </router-link>

        

            <!-- Login/Register buttons for non-authenticated users -->
            <div v-else class="hidden md:flex items-center space-x-2">
              <router-link to="/login" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                Войти
              </router-link>
    
            </div>

            <!-- Mobile menu button -->
            <button @click="toggleMobileMenu" aria-label="Toggle Menu"
              class="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 px-4 pt-2 pb-3 space-y-1">
        <router-link @click="closeMobileMenu" to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
          Главная
        </router-link>
      </div>
    </nav>

    <main class="flex-grow bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto">
        <router-view></router-view>
      </div>
    </main>

    <footer class="bg-white dark:bg-gray-800 shadow">
      <div class="w-full mx-auto max-w-screen-xl p-4 text-center">
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Автоклуб САМУРАЙ © {{ new Date().getFullYear() }} Все права защищены.
        </span>
      </div>
    </footer>


  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useClientStore } from '@/stores/client';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
  },
  setup() {
    const authStore = useAuthStore();
    const clientStore = useClientStore();
    const router = useRouter();

    const isDark = ref(false);
    const mobileMenuOpen = ref(false);
    const userMenuOpen = ref(false);

    // Computed properties
    const isAuthenticated = computed(() => authStore.isAuthenticated);
    const userEmail = computed(() => authStore.userEmail);

    // Load theme from localStorage or system preference
    onMounted(async () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      updateTheme();

      // Initialize auth
      await authStore.init();
    });

    // Watch and update theme class on html element
    watch(isDark, (newVal) => {
      updateTheme();
      localStorage.setItem('theme', newVal ? 'dark' : 'light');
    });

    function updateTheme() {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleTheme() {
      isDark.value = !isDark.value;
    }

    function toggleMobileMenu() {
      mobileMenuOpen.value = !mobileMenuOpen.value;
    }

    function closeMobileMenu() {
      mobileMenuOpen.value = false;
    }

    function toggleUserMenu() {
      userMenuOpen.value = !userMenuOpen.value;
    }

    function closeUserMenu() {
      userMenuOpen.value = false;
    }

    async function handleLogout() {
      try {
        await authStore.logout();
        clientStore.clearData();
        closeUserMenu();
        router.push('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }

    return {
      isDark,
      mobileMenuOpen,
      userMenuOpen,
      isAuthenticated,
      userEmail,
      toggleTheme,
      toggleMobileMenu,
      closeMobileMenu,
      toggleUserMenu,
      closeUserMenu,
      handleLogout
    };
  },
};
</script>

<style>
/* Dark mode styles */
:root {
  --primary-color: #f0b90b;
  --text-color: rgba(0, 0, 0, 0.85);
  --bg-color: #fff;
}

:root.dark {
  --primary-color: #f0b90b;
  --text-color: rgba(255, 255, 255, 0.85);
  --bg-color: #141414;
}

body {
  color: var(--text-color);
  background-color: var(--bg-color);
}

/* Ensure mobile menu stays above overlay */
#mobile-menu {
  position: relative;
  z-index: 20;
}
</style>
