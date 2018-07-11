import Vue from 'vue';
import VueRouter from 'vue-router';

// 同步加载路由(服务端渲染)
import vr1 from '../components/vr1.vue';
// import axios from '../components/axios.vue';
// import vuexs from '../components/vuexs.vue';

Vue.use(VueRouter);

// 异步加载路由(客户端渲染)
const axios = () => import('../components/axios.vue');
const vuexs = () => import('../components/vuexs.vue');

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
      component: vr1
    },
    {
      path: '/axios',
      component: axios
    },
    {
      path: '/vuex',
      component: vuexs
    }
  ],
  linkActiveClass: 'active'
});
