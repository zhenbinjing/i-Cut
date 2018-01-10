<template>
  <div class="hello">
    <p class="logo"><img src="../assets/img/logo.png" alt="logo"></p>
    <p>{{ message }}</p>
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