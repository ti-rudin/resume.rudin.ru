import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import history from 'connect-history-api-fallback'

export default defineConfig(({ mode }) => {
  // Загружаем переменные окружения из папки main-front
  const env = loadEnv(mode, process.cwd() + '/main-front', '')

  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: true,
      allowedHosts: env.VITE_ALLOWED_HOSTS ? env.VITE_ALLOWED_HOSTS.split(',') : ['all'],
      port: 4011,
      cors: false,
      strictPort: true,
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
        'Cross-Origin-Embedder-Policy': 'require-corp'
      },
      middleware: [
        history({
          verbose: true,
          disableDotRule: true,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
        })
      ]
    },
    preview: {
      port: 4011,
      allowedHosts: env.VITE_ALLOWED_HOSTS ? env.VITE_ALLOWED_HOSTS.split(',') : ['all'],
    },
    base: '/',
    publicDir: 'public',
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
})
