<template>
    <div class="increment">
        <button @click='increment'>Increment +1</button>
        <button @click='decrement'>Decrement -1</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
     methods: mapActions([ 'increment','decrement' ])
  }
</script>