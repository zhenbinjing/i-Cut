<template>
  <div class="vue-router">
    <div v-for="data in datas" :key="data.value">{{ data.value }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const fetchInitialData = store => store.dispatch('getData');

export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      datas: 'getData'
    })
  },
  mounted() {
    fetchInitialData(this.$store);
  }
};
</script>
