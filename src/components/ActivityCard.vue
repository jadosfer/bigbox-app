<template>
  <div class="activity-item">
    <router-link
      :to="{ name: 'ActivityDetail', params: { id: activity.id } }"
      style="text-decoration: none; color: inherit"
    >
      <img :src="imageSrc" class="card-img-top" alt="Activity Image" />
      <div>
        <div class="contenedor">
          <div class="title-div">
            <h3>{{ activity.title }}</h3>
          </div>
          <div class="icons">
            <div
              v-for="p in JSON.parse(this.activity.activity).participants"
              :key="p"
            >
              <i class="far fa-user"></i>
            </div>
          </div>
        </div>

        <div>
          <i class="fa fa-map-marker-alt icon-red"></i>
          <span class="location">
            &nbsp;{{ JSON.parse(this.activity.activity).locations[0].address }},
            {{ JSON.parse(this.activity.activity).locations[0].province }}
          </span>
        </div>
        <p class="description">
          {{ JSON.parse(this.activity.activity).description }}
        </p>
        <p class="points">{{ activity.points }} puntos</p>
        <p class="participants">
          Participantes: {{ JSON.parse(this.activity.activity).participants }}
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
  width: 369px;
  height: 240px; /* Altura fija para la imagen */
  object-fit: cover;
  border-radius: 5px;
}

.points {
  font-family: "Quicksand", sans-serif;
  font-size: 18px;
  color: #464646;
}

.participants {
  display: flex;
  gap: 4px;
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

.contenedor {
  position: relative;
  width: 369px; /* Ancho de tu contenedor */
  height: 60px; /* Alto de tu contenedor */
}

.title-div {
  position: absolute;
  top: 0px;
  left: 0px;
}
.icons {
  position: absolute;
  top: 20px;
  right: 5px;
  display: flex;
}

.fa-user {
  margin-left: -3px;
}
</style>
