<template>
  <div v-if="filteredActivities.length > 0" class="container">    
    <div class="activity-list">
      <div v-for="activity in filteredActivities" :key="activity.id">        
        <activity-card
          :data="activity"
          :activity="JSON.parse(activity.activity)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ActivityCard from "./ActivityCard.vue";

export default defineComponent({
  props: {
    activities: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },
  components: {
    ActivityCard,
  },
  computed: {
    filteredActivities() {
      if (this.activities) {
        return this.activities.slice(0, 3);
      } else {
        return [];
      }
    }
  }
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
