import Vue  from 'vue'
import css  from './assets/allcss.js'
import App from './App.ssr.vue'
import { createRouter } from './router/index.ssr.js'

export function createApp () {
  const router = createRouter()
  const app = new Vue({ 
    router,
    render: h => h(App)
  })
  return { app, router }
}