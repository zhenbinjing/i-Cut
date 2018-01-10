<template>
    <div class="display">
      <div class="fz40">Count is {{ getCount }}</div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: mapGetters([ 'getCount' ])
  }
</script>