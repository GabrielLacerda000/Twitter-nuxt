export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-black text-white font-semibold font-mono'
      }
    }
  }
})