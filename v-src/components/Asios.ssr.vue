<template>
  <div class="asios">
    <h2>Axios</h2>
    <div v-for="topic in topics" class="asios_text" :key="topic.name">
        {{topic.name}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const fetchInitialData = ({ store }) => {
  return store.dispatch(`getTopics`)
}

export default {
  asyncData: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: 'getTopics'
    })
  },
  mounted () {
    fetchInitialData({ store:this.$store })
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
