<template>
    <div class="display">
      <div class="fz30">Count is {{ getCount }}</div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: mapGetters([ 'getCount' ])
  }
</script>