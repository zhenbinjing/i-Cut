<template>
  <div class="axios">
    <div class="title">Axios</div>
    <div v-if=" topics == '' ">
      <loading/> 
    </div>
    <div v-else>
      <div 
        v-for="topic in topics" 
        :key="topic.name" 
        class="axios_text">
        {{ topic.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import loading from './loading.vue';

const fetchInitialData = store => store.dispatch('getTopics');

export default {
  components: { loading },
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

<!--添加 scoped 属性 css只作用在此组件上-->
<style scoped>
.axios {
  font-size: 0;
}
.axios_text {
  color: black;
  font-size: 40px;
  display: inline-block;
  padding: 0 10px;
}
</style>
