<template>
  <div class="carousel-container">
    <carousel :items-to-show="1">
      <slide v-for="(item, index) in imageArray" :key="index">
        <img class="carousel-image" :src="item" alt="Slide Image" />
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  props: {
    imageArray: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style>
.carousel-image {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.carousel__icon {
  color: white !important;
}
.carousel__next, .carousel__prev {
  font-size: 40px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.4) !important;
}

</style>
