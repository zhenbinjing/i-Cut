import Vue  from 'vue'
import css  from './assets/allcss.js'
import App from './App.vue'
import router from './router/index.js'

const app = new Vue({
  el:"#app",
  router,
  render: h => h(App)
})
