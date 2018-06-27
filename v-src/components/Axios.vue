<template>
  <div class="axios">
    <div v-if=" datas == '' ">
      <loading/> 
    </div>
    <div v-show=" datas != '' ">
      <div 
        v-for="data in datas.text" 
        :key="data.value" 
        class="axios_text">
        {{ data.value }}      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import loading from './loading.vue';

const fetchInitialData = store => store.dispatch('getData');

export default {
  components: { loading },
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

<!--添加 scoped 属性 css只作用在此组件上-->
<style scoped>
.axios {
  font-size: 0;
}
.axios_text {
  color: #35495e;
  font-size: 40px;
  display: inline-block;
  padding: 0 10px;
}
</style>
