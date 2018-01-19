import Vue  from 'vue'
import css  from './assets/allcss.js'
import App from './App.ssr.vue'
import { createRouter } from './router/index.ssr.js'
import { createStore } from './vuex/state.js' 
import { sync } from 'vuex-router-sync'

export function createApp () {
    const router = createRouter()
    const store = createStore()
    
    sync(store, router)

    const app = new Vue({     
      router,
      store,
      render: h => h(App)
    })
    return { app, router, store }
}