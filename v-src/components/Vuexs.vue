<template>
  <div class="vuex">
    <h2>Vuex</h2>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Display from './display.vue'
import Increment from './increment.vue'
import store from '../vuex/store.js' 

export default {
  components: {
    Display,Increment
  },
  store 
}
</script>
