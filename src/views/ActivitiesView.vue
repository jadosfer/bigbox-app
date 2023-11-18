<template>
  <div>
    <ActivityList />
    <ActivityPaginator />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActivityList from "../components/ActivityList.vue";
import ActivityPaginator from "../components/ActivityPaginator.vue";

export default defineComponent({
  components: {
    ActivityList,
    ActivityPaginator,
  },
  // View logic here
});
</script>

<style>
/* Estilos */
</style>
