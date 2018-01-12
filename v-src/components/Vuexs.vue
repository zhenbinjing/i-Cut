<template>
  <div class="vuex">
    <h2>Vuex</h2>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Vuex from 'vuex'
import store from '../vuex/index.js' 
import Display from './display.vue'
import Increment from './increment.vue'

export default {
  components: { Display, Increment },
  store
}
</script>
