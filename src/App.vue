<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex items-center space-x-4">
            <router-link to="/">
             <svg width="40" height="40" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.8 77.4609H105.575V177.752H72.9883V77.459H40V52.3779H136.8V77.4609ZM176.928 177.752C157.007 176.584 142.632 160.216 144.331 137.857V83.8252H176.928V177.752ZM176.928 52V77.1729H144.331V52H176.928Z" fill="#FF7700"/>
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

            <!-- Mobile menu button 
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
            -->
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
          © {{ new Date().getFullYear() }} Рудин Александр
        </span>
      </div>
    </footer>


  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
  },
  setup() {
    const isDark = ref(false);
    const mobileMenuOpen = ref(false);

    // Load theme from localStorage or system preference
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      updateTheme();
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

    return {
      isDark,
      mobileMenuOpen,
      toggleTheme,
      toggleMobileMenu,
      closeMobileMenu
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
