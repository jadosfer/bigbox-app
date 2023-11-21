<template>
  <div class="conten">
    <div class="">
      <div class="content-title">
        <h3>¿Qué incluye?</h3>
      </div>
      <div class="benefits" v-html="activity.benefits"></div>
      <div class="content-rules">
        <h4><img src="@/assets/icons/doc-icon.svg" alt="Mi icono" /> Reglas</h4>
        <div v-html="activity.small_print"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    activity: {
      type: Object as () => ({
        participants: number;
        locations: Array<any>;
      }),
      required: true,
    },
  },  
});
</script>

<style scoped>

</style>
