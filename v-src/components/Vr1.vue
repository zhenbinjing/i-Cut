<template>
  <div class="vue-router">
    <div>{{ datas.vaule }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      datas: ''
    };
  },
  created() {
    axios.get('https://i-cut.cc/axios.json').then(res => {
      this.datas = res.data.router;
    });
  }
};
</script>
