// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt', '@nuxt/image', 'nuxt-mongoose'],
  image: {
    domains: [],
  },
  mongoose: {
    uri: 'mongodb://localhost:27017/nuxt_db?authSource=admin',
    options: {},
    modelsDir: 'models',
  },
});
