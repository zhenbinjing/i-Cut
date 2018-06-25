<template>
  <div class="hello">
    <p class="logo">     
      <img :src="data.avatar" alt="logo">
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
};
</script>
