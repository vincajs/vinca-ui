import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      vinca: 'aaa',
    },
  }
})
