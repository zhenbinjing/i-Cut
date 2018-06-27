<template>
  <div class="axios">
    <div v-if=" datas == '' ">
      <loading/> 
    </div>
    <div v-show=" datas != '' ">
      <div 
        v-for="data in datas" 
        :key="data.value" 
        class="axios_text">
        {{ data.value }}      
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import loading from './loading.vue';

export default {
  components: { loading },
  data() {
    return {
      datas: {}
    };
  },
  created() {
    axios.get('https://i-cut.cc/axios.json').then(res => {
      this.datas = res.data.text;
    });
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
