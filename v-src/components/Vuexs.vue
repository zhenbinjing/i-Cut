<template>
  <div class="vuex">
    <div class="title">Vuex</div>
    <Display/>
    <Increment/>
  </div>
</template>

<script>
import Display from './display.vue';
import Increment from './increment.vue';

export default {
  components: { Display, Increment }
};
</script>
