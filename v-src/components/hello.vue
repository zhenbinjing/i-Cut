<template>
  <div class="hello">
    <p class="logo"><img src="../assets/img/logo.png" alt="logo"></p>
    <p class="fz40">{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
      return {
        message: 'Hello Vue!'
      }
  }   
}
</script>