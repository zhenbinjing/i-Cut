import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;
Vue.use(Vuex);

const app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});

export { app, router, store };
