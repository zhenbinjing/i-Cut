﻿<template>
  <div class="axios">
    <div v-show="TextData == ''"><Loading /></div>
    <div
      v-for="textdatas in TextData"
      :key="textdatas.value"
      class="axios_text"
    >
      {{ textdatas.value }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/loading.vue";

const fetchTextData = (store) => store.dispatch("getText");

export default {
  components: { Loading },
  prefetch: fetchTextData,
  computed: {
    ...mapGetters({
      TextData: "getText",
    }),
  },
  mounted() {
    fetchTextData(this.$store);
  },
};
</script>

<!-- 添加 scoped 属性 css只作用在此组件上 -->
<style>
.axios {
  font-size: 0;
}
.axios_text {
  color: #35495e;
  font-size: 40px;
  display: inline-block;
  padding: 0 10px;
}
</style>
