<template>
  <div class="vuex">
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
