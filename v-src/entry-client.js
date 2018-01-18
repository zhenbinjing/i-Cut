import { createApp } from './main.ssr'

const { app, router } = createApp()

router.onReady(() => {
  app.$mount('#app')
})