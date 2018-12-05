<template>
  <div id="app"><Hello :data="data" /> <Router /></div>
</template>

<script>
import axios from 'axios';
import Hello from '@/hello.vue';
import Router from '@/router.vue';

export default {
  components: { Hello, Router },
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
