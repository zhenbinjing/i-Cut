import Vue from 'vue';
import VueRouter  from 'vue-router'
Vue.use(VueRouter);

import Vr1 from '../components/Vr1.vue'

//异步加载路由
const Vr2 = () => import('../components/Vr2.vue')
const Vr3 = () => import('../components/Vr3.vue')

export default new VueRouter({    
    routes: [
      {
        path: '/',
        redirect: '/vr1'
      },
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
    ],
    linkActiveClass: 'active'
});
