import { resolve } from 'node:path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    cookie: resolve(__dirname, 'node_modules/cookie'),
  },
  runtimeConfig: {
    authJs: { secret: '/OEjlRC2DK74ZEj5nl8qHNy+E6/JptnouIyHnANbBz0=' },
    public: {
      apiBase: '/api',
      authJs: {
        baseUrl: 'http://localhost:3000',
        verifyClientOnEveryRequest: true,
      },
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@nuxt/image',
    'nuxt-mongoose',
    '@hebilicious/authjs-nuxt',
  ],
  image: {
    domains: [],
  },
  mongoose: {
    uri: 'mongodb://localhost:27017/nuxt_db?authSource=admin',
    options: {},
    modelsDir: 'models',
  },
  authJs: {
    guestRedirectTo: '/',
  },
});
