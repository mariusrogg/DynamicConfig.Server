import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    environment: 'happy-dom',
    alias: {
      '@/': new URL('.', import.meta.url).pathname
    },
    coverage: {
      provider: 'v8',
      enabled: true
    },
  }
})
