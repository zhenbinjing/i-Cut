import promise from 'es6-promise';

import Vue from 'vue';
import Vuex from 'vuex';
//import { sync } from 'vuex-router-sync'; // 清除注释开启服务端渲染

import App from './App.vue';
import router from './router';
import store from './vuex/store';

promise.polyfill();

Vue.config.productionTip = false;
Vue.use(Vuex);
//sync(store, router); // 清除注释开启服务端渲染

const app = new Vue({
  el: '#app', // 注释掉开启服务端渲染
  router,
  store,
  ...App
});

export { app, router, store };
