export default defineNuxtConfig({
  modules: ['../src/module'],
  css: ['~/assets/app.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
    },
  },
})
