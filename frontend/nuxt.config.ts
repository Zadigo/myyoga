import tailwind from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,

  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n'
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  vite: {
    plugins: [tailwind()]
  },

  css: [
    '~/assets/css/main.css'
  ],

  ui: {
    prefix: 'Nuxt'
  },
  
  fonts: {
    families: [
      // Body
      {
        name: 'Nunito Sans',
        weight: [200, 900],
        preload: true
      },
      // Title
      {
        name: 'Zilla Slab',
        weight: [200, 800],
        preload: true
      }
    ]
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US' },
      { code: 'fr', language: 'fr-FR' }
    ],
    defaultLocale: 'en',
  }
})
