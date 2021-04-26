import Vue from "vue";
import VueRouter from "vue-router";

import Vr1 from "@/Vr1.vue";

Vue.use(VueRouter);

const Axios = () => import("@/Axios.vue");
const Vuexs = () => import("@/Vuexs.vue");

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/vr1",
    },
    {
      path: "/vr1",
      component: Vr1,
    },
    {
      path: "/axios",
      component: Axios,
    },
    {
      path: "/vuex",
      component: Vuexs,
    },
  ],
  linkActiveClass: "active",
});
