<template>
  <div class="activity-list">
    <div v-for="activity in activities" :key="activity.id" class="activity-item">
      <img :src="activity.image" alt="Activity Image" />
      <div class="activity-details">
        <h3>{{ activity.title }}</h3>
        <p><strong>Location:</strong> {{ activity.location }}</p>
        <p><strong>Description:</strong> {{ activity.description }}</p>
        <p><strong>Points:</strong> {{ activity.points }}</p>
        <p><strong>Participants:</strong> {{ activity.participants }}</p>
        <!-- More details or buttons if needed -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import { fetchActivities } from '../api/activities';

export default defineComponent({
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
}

.activity-item {
  width: calc(33.33% - 20px);
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}

.activity-item img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.activity-details {
  font-size: 14px;
}
</style>