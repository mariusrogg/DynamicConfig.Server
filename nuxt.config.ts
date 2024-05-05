// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    renderJsonPayloads: false, // Supress "Cannot stringify arbitrary non-POJOs"
  },
  modules: ["nuxt-primevue", "@pinia/nuxt"],
  css: ["primevue/resources/themes/aura-dark-green/theme.css"],
});
