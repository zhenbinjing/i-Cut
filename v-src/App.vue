<template>
  <div class="main">
    <h1>{{ message }}</h1>
    <h2>Vue-router</h2>
    <div class="router">
    <router-link to="/vr1">vr1</router-link>
    <router-link to="/vr2">vr2</router-link>
    <router-link to="/vr3">vr3</router-link>
    <router-view></router-view>
    </div>
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

<style>
html,body{ height: 100%}
body{display: flex; justify-content: center; align-items: center; margin: 0 }
div { text-align: center }
button{font-size: 30px; vertical-align:middle}
h1,h2 { font-size:60px; color:#42b983; padding: 20px 0; margin: 0; line-height: 1 }
a { text-decoration: none; color:black; }
a.active { color:#0062f5 }
</style>
<!--
<style lang="sass" rel="stylesheets/sass">
</style>
-->