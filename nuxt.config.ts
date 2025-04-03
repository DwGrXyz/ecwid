// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/test-utils",
    "vuetify-nuxt-module",
  ],
  runtimeConfig: {
    public: {
      token: process.env.NUXT_API_TOKEN,
      storeId: process.env.NUXT_API_STORE_ID,
    },
  },
  typescript: {
    typeCheck: true,
  },
});
