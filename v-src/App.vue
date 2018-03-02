<template>
  <div id="app">
    <hello/>    
    <router/>  
  </div>  
</template>

<script>
import hello from './components/hello.vue';
import router from './components/router.vue';

export default {
  components: { hello, router }
};
</script>

<style>
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
  padding: 20px 0;
  margin: 0;
  line-height: 1;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
}
a.active {
  color: #0062f5;
}
img {
  max-width: 100%;
}
p {
  padding: 0;
  margin: 0;
}
</style>
<!--
<style lang="sass" rel="stylesheets/sass">
</style>
-->
