import Vue  from 'vue'
import VueRouter  from 'vue-router'
import App from './App.vue'
//import router from './router/index.js';

Vue.use(VueRouter);

import Vr1 from './components/Vr1.vue'
import Vr2 from './components/Vr2.vue'
import Vr3 from './components/Vr3.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/vr1',
      component: Vr1
    },
    {
      path: '/vr2',
      component: Vr2
    },
    {
      path: '/vr3',
      component: Vr3
    }
  ]
})

const app = new Vue({
  el:"#app",
  router: router,
  render: h => h(App)
})
