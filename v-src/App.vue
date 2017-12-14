<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>Vue-router</h2>
    <router-link to="/vr1">vr1</router-link>
    <router-link to="/vr2">vr2</router-link>
    <router-link to="/vr3">vr3</router-link>
    <router-view></router-view>
    <Vd></Vd>
    <h2>Vuex</h2>
    <Vuexs></Vuexs>
  </div>  
</template>

<script>
import Vuex from 'vuex'
import Vd from './components/Vd.vue';
import Vuexs from './components/Vuexs.vue';

export default {
  data () {
      return {
        message: 'Hello Vue!'
      }
  },
  components: { Vd,Vuexs }
}
</script>