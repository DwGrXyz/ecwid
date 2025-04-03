// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/eslint', '@nuxt/test-utils'],
  runtimeConfig: {
    public: {
      token: process.env.NUXT_API_TOKEN,
      storeId: process.env.NUXT_API_STORE_ID,
    }
  }
})