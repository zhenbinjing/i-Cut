import Vue  from 'vue'
import css  from './assets/allcss.js'
import App from './App.vue'
import router from './router/index.js'
import store from './vuex/state.js'
import { sync } from 'vuex-router-sync'

sync(store, router)

const app = new Vue({
  el:"#app",  // 开启服务端渲染要注释掉
  router,
  store,
  ...App
})

export { app, router, store }