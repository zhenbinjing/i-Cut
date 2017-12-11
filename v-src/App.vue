<template>
  <div>
    <div>{{ message }}</div>
    <router-link to="/vr1">vr1</router-link>
    <router-link to="/vr2">vr2</router-link>
    <router-link to="/vr3">vr3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
      return {
        message: 'Hello Vue!'
      }
  }
}
</script>