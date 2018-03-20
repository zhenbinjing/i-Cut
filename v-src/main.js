import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './vuex/store';

sync(store, router);
Vue.use(Vuex);

const app = new Vue({
  el: '#app', // 开启服务端渲染要注释掉
  router,
  store,
  ...App
});

export { app, router, store };
