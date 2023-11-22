<template>
  <div>
    <div class="activity-list">
      <activity-card
        v-for="activity in activities"
        :key="activity.id"
        :data="activity"       
        :activity="JSON.parse(activity.activity)" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ActivityCard from "./ActivityCard.vue";

export default defineComponent({
  components: {
    ActivityCard,
  },
  props: {
    activities: {
      type: Array as PropType<any[]>,
      required: true,
    },
  },  
});
</script>

<style scoped>
.activity-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
