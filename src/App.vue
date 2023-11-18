<template>
  <div id="app">
    <!-- Barra de navegación  -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import '@fortawesome/fontawesome-free/css/all.css';

export default defineComponent({
  name: "App"
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
