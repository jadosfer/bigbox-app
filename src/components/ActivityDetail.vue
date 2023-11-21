<template>
  <div class="info">
    <h2 class="title">{{ details.title }}</h2>
    <p>{{ activity.description }}</p>
    <div class="contenedor">
      <div class="icons">
        <div v-for="p in activity.participants" :key="p">
          <i class="far fa-user"></i>
        </div>
      </div>
      <div :style="{ marginLeft: dynamicMargin }" class="icons-text">
        <p>
          Para {{ activity.participants }}
          {{ activity.participants > 1 ? "personas" : "persona" }}
        </p>
      </div>
    </div>
    <div v-if="activity.locations">
      <i class="fa fa-map-marker-alt icon-red"></i>
      <span class="location">
        &nbsp;{{ activity.locations[0]?.address }},
        {{ activity.locations[0]?.province }}
      </span>
    </div>
    <p class="points">{{ details.points }} puntos</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    activity: {
      type: Object as () => ({
        participants: number; // Define el tipo de dato de 'participants'
        locations: Array<any>;
      }),
      required: true,
    },
    details: {
      type: Object as () => Record<string, unknown>,
      required: true,
    },
  },
  computed: {
    dynamicMargin() {
      const marginLeft = this.activity.participants*12
      // Calcula el valor de la variable CSS basado en la prop
      return `${marginLeft}px`;
    },
  },
});
</script>

<style scoped>
.info {
  text-align: left;
}
.title {
  font-family: Quicksand;
  font-size: 30px;  
  color: var(--Gray-1, #464646);
}
.contenedor {
  position: relative;
  width: 369px;
  height: 60px;
}
.icons {
  position: absolute;
  top: 10px;
  left: 0px;
  display: flex;
}
.icons-text {
  position: absolute;
  top: -8px;
  left: 15px;
  display: flex;
}
.points {
  color: var(--Gray-1);  
  font-family: Quicksand;
  font-size: 24px;
}
</style>
