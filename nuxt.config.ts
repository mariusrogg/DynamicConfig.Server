// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module", "nuxt-primevue", "@pinia/nuxt"],
  css: ["primevue/resources/themes/aura-dark-green/theme.css"],
});
