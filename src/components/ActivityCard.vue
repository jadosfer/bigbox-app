<template>
  <div class="activity-item card">
    <router-link
      :to="{ name: 'ActivityDetail', params: { id: activity.id } }"
      class="card-body"
      style="text-decoration: none; color: inherit"
    >
      <img :src="imageSrc" class="card-img-top" alt="Activity Image" />
      <div class="activity-details">
        <h3 class="card-title title">{{ activity.title }}</h3>
        <div class="location">
          <i class="fas fa-map-marker-alt icon-red"></i>
          <span class="location">
            &nbsp;{{ JSON.parse(this.activity.activity).locations[0].address }},
            {{ JSON.parse(this.activity.activity).locations[0].province }}
          </span>
        </div>
        <p class="card-text description">
          {{ JSON.parse(this.activity.activity).description }}
        </p>
        <p class="card-text points">
          {{ activity.points }} puntos
        </p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    activity: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  computed: {
    imageSrc(): string {
      return JSON.parse(this.activity.activity).image[0];
    },
  },
});
</script>

<style scoped>
.activity-item {
  width: calc(33.33% - 20px);
  margin: 10px;
  border-radius: 30px;
}

.icon-red {
  color: #ff6c5e;
}

.card-img-top {
  width: 100%;
  height: 200px; /* Altura fija para la imagen */
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.title, .points {
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  color: #464646;
}

.location {
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  color: #000000;
}

.description {
  font-family: "Quicksand", sans-serif;
  font-size: 14px;
  color: #464646;
}


</style>
