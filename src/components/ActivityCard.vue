<template>
  <div v-if="data" @click="redirectToActivityDetail" class="activity-item">
    <router-link
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
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import store from "@/store/store";
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
  methods: {
    redirectToActivityDetail() {
      store.dispatch("fetchActivityDetails", { id: this.data.id });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>

<style scoped>
.activity-item {
  width: calc(30vw - 20px);
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
