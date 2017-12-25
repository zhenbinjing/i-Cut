import Vue from 'vue';
import VueRouter  from 'vue-router'
Vue.use(VueRouter);

import Vr1 from '../components/Vr1.vue'
import Vr2 from '../components/Vr2.vue'
import Vr3 from '../components/Vr3.vue'

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
