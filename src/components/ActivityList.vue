<template>
  <div class="activity-list">
    <activity-card
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      class="col-md-4"
    ></activity-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchActivities } from "../api/activities";
import ActivityCard from "./ActivityCard.vue";

export default defineComponent({
  components: {
    ActivityCard,
  },
  setup() {
    const activities = ref([]);

    onMounted(async () => {
      try {
        const data = await fetchActivities(1, 9); // Obtiene las actividades de la primera página
        activities.value = data; // Actualiza la lista de actividades
      } catch (error) {
        // Manejo de errores
      }
    });

    return {
      activities,
    };
  },
});
</script>

<style scoped>
/* Estilos para el componente Activities.vue */
.activity-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>
