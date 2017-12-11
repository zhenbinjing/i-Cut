<template>
  <div>
    <h2>{{ message }}</h2>
    <Vr></Vr>
    <Vd></Vd>
  </div>  
</template>

<script>
import Vr from './components/Vr.vue';
import Vd from './components/Vd.vue';
export default {
  el: '#app',
  data () {
      return {
        message: 'Hello Vue!'
      }
  },
  components: { Vr,Vd }
}
</script>