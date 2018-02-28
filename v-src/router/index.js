import Vue from 'vue';
import VueRouter from 'vue-router';

// 同步加载路由(服务端渲染)
import Vr1 from '../components/Vr1.vue';
// import Axios from '../components/Axios.vue'
// import Vuexs from '../components/Vuexs.vue'

Vue.use(VueRouter);

// 异步加载路由(客户端渲染)
const Axios = () => import('../components/Axios.vue');
const Vuexs = () => import('../components/Vuexs.vue');

export default new VueRouter({
  // 去掉下面注释开启服务端渲染 history 模式
  // mode: 'history',
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
      path: '/axios',
      component: Axios
    },
    {
      path: '/vuex',
      component: Vuexs
    }
  ],
  linkActiveClass: 'active'
});
