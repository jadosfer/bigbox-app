<template>
  <div>
    <ActivityDetail />
    <ActivityCarousel />
  </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ActivityDetail from '../components/ActivityDetail.vue';
import ActivityCarousel from '../components/ActivityCarousel.vue';

export default defineComponent({
  components: {
    ActivityDetail,
    ActivityCarousel,
  },
  // View logic here
});
</script>

<style>
/* Estilos */
</style>
