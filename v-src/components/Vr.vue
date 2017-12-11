<template>
  <div>
    <h2>{{ message }}</h2>
    <router-link to="/vr1">vr1</router-link>
    <router-link to="/vr2">vr2</router-link>
    <router-link to="/vr3">vr3</router-link>
    <router-view></router-view>
    <Vd></Vd>
  </div>  
</template>

<script>
export default {
  data () {
      return {
        message: 'Vue-router'
      }
  }
}
</script>