<template>
  <div class="asios">
    <h2>{{ message }}</h2>
    <div v-for="article in articles" class="asios_text">
        {{article.name}}
    </div>
  </div>
</template>

<script>
import axios  from 'axios'
export default {
  data () {
      return {
        message: 'Axios',
        articles: []
      }
  },
  mounted () {
    axios.get('https://i-cut.cc/axios.json')
    .then(response => {
       this.articles = response.data
      // console.log(this.articles)
    })    
  }
}
</script>

<!--添加 scoped 属性 css只作用在此组件上-->
<style scoped>
.asios{font-size: 0;}
.asios_text {
  color: black; font-size: 40px; display: inline-block; padding: 0 10px;
}
</style>
