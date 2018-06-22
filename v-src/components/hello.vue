<template>
  <div class="hello">
    <p class="logo" v-for="topic in topics.data2" :key="topic.logo">      
      <img :src="topic.logo" alt="logo">
    </p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
const fetchInitialData = store => store.dispatch('getTopics');

export default {
  prefetch: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTopics'    
    })
  },
  mounted() {
    fetchInitialData(this.$store);
  }
};
</script>
