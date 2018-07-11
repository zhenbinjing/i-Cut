<template>
  <div class="vue-router">
    {{ RouterData.value }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const fetchRouterlData = store => store.dispatch('getRouter');

export default {
  prefetch: fetchRouterlData,
  computed: {
    ...mapGetters({
      RouterData: 'getRouter'
    })
  },
  mounted() {
    fetchRouterlData(this.$store);
  }
};
</script>
