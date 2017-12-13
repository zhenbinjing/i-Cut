<template>
  <div id="Vd">
    <h2>{{ message }}</h2>
    <div v-for="article in articles">
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
    axios.get('/axios.json')
    .then(response => {
       this.articles = response.data
      // console.log(this.articles)
    })    
  }
}
</script>