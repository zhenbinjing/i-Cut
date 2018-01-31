<template>
  <div class="vuex">
    <div class="title">Vuex</div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Display from './display.vue'
import Increment from './increment.vue'

export default {
  components: { Display, Increment }
}
</script>
