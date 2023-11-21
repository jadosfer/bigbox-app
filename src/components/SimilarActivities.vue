<template>
  <div class="container">
    <div class="activity-list">
      <div v-for="i in activity.image" :key="i">
        <activity-card :data="activity" :activity="activity" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ActivityCard from "./ActivityCard.vue";

export default defineComponent({
  props: {
    activity: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  components: {
    ActivityCard,
  },
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 2fr));
}

.activity-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; /* Distribuye en 4 columnas iguales */
}
</style>
