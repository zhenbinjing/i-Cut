<template>
  <div id="app"><hello :data="data" /> <router /></div>
</template>

<script>
import axios from 'axios';
import hello from '@/hello.vue';
import router from '@/router.vue';

export default {
  components: { hello, router },
  data() {
    return {
      data: {}
    };
  },
  created() {
    axios.get('https://i-cut.cc/axios.json').then(res => {
      this.data = res.data.logo;
    });
  }
};
</script>

<style>
@import './static/css/index.css';
</style>
<style lang="sass" rel="stylesheets/sass">
@import './static/css/sass.scss';
</style>
