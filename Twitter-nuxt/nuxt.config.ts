export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-black text-white font-semibold font-mono'
      }
    }
  }
})