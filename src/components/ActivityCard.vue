<template>
  <div class="activity-item" > 
    <router-link v-if="activity.locations"
      :to="{ name: 'ActivityDetail', params: { id: data.id } }"
      style="text-decoration: none; color: inherit"
    >
      <img :src="activity.image[0]" class="card-img-top" alt="Activity Image" />
      <div>
        <div class="contenedor">
          <div class="title-div">
            <h3>{{ data.title }}</h3>
          </div>
          <div class="icons">
            <div v-for="p in activity.participants" :key="p">
              <i class="far fa-user"></i>
            </div>
          </div>
        </div>

        <div>
          <i class="fa fa-map-marker-alt icon-red"></i>
          <span class="location">
            &nbsp;{{ activity.locations[0].address }},
            {{ activity.locations[0].province }}
          </span>
        </div>
        <p class="description">
          {{ activity.description }}
        </p>
        <p class="points">{{ data.points }} puntos</p>
        <p class="participants">Participantes: {{ activity.participants }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      type: Object as () => {
        id: number;
        activity: Object;
      },
      required: true,
    },
    activity: {
      type: Object as () => {        
        image: [];
      },
      required: true,
    },
  },  
  // computed: {
  //   imageSrc(): string {
  //     return activity.image[0];
  //   },
  // },
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
