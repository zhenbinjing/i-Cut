<template>
  <div id="app">
    <hello :data="data"/>    
    <router/>
  </div>  
</template>

<script>
import axios from 'axios';
import hello from './components/hello.vue';
import router from './components/router.vue';

export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    axios.get('https://i-cut.cc/axios.json').then((res) => {
      this.data = res.data.logo
    })
  },
  components: { hello, router }
};
</script>

<style>
@import './assets/css/index.css';
html,
body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
div {
  text-align: center;
}
button {
  font-size: 30px;
  vertical-align: middle;
}
.title {
  font-size: 60px;
  color: #57bb8a;
  margin: 0;
  line-height: 1;
  font-weight: bold;
}
a {
  text-decoration: none;
  font-size: 60px;
  color: #57bb8a;
  margin: 0;
  line-height: 2.4;
  font-weight: bold;
}
a.active {
  color: #35495e;
}
img {
  max-width: 100%;
}
p {
  padding: 0;
  margin: 0;
}
button {
  color: #35495e;
}
</style>
<style lang="sass" rel="stylesheets/sass">
@import './assets/css/sass.scss';
</style>
