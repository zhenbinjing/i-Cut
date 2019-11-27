<template>
  <div class="increment">
    <button @click="loadings">加载初始值</button>
    <button @click="increment">增加 1</button>
    <button @click="decrement">减少 1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['loadings', 'increment', 'decrement'])
};
</script>
