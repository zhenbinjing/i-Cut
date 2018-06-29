<template>
  <div class="hello">
    <p class="logo">     
      <img 
        :src="data.avatar" 
        alt="logo">
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { avatar: 'hello' }; // 默认值
      }
    }
  }
};
</script>
