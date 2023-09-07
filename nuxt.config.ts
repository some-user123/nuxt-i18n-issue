// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  modules: ['@nuxtjs/i18n'],

  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },
});
