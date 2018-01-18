import Vue from 'vue';
import VueRouter  from 'vue-router'
Vue.use(VueRouter);

//同步加载路由
import Vr1 from '../components/Vr1.vue'
//import Vr2 from '../components/Vr2.vue'
//import Vr3 from '../components/Vr3.vue'

//异步加载路由
const Vr2 = () => import('../components/Vr2.vue')
const Vr3 = () => import('../components/Vr3.vue')


export function createRouter () {
  return new VueRouter({ 
    mode: 'history',  //开启history模式
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
})
}
