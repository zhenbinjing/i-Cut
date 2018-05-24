import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import 'babel-polyfill';  // 兼容低版本的浏览器，但会导致文件过大。

import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;
Vue.use(Vuex);
sync(store, router);

const app = new Vue({
  //el: '#app', // 开启服务端渲染要注释掉
  router,
  store,
  ...App
});

export { app, router, store };
