<template>
  <div class="conten">
    <div class="">
      <div class="content-title">
        <h3>¿Qué incluye?</h3>
      </div>
      <div class="benefits" v-html="activity.benefits"></div>
      <div>
        <h4 class="title">
          <img class="doc" src="@/assets/icons/doc-icon.svg" />
          Reglas
        </h4>
        <div class="rules" v-html="activity.small_print"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    activity: {
      type: Object as () => {
        participants: number;
        locations: Array<any>;
      },
      required: true,
    },
  },
});
</script>

<style scoped>
.content-title {
  position: relative;
  float: left;
  width: 100%;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: #eaeaea;
  margin: 0 0 25px;
}

.content-title h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -1px;
  position: relative;
  float: left;
  color: #464646;
  padding: 0 12px 0;
  bottom: -11px;
}

.content-title h3::after {
  content: " ";
  position: absolute;
  bottom: -11px;
  background-color: #ff6c5f;
  height: 2px;
  width: 100%;
  left: 0;
}

.title {
  display: flex;
  align-items: center;
  font-size: 22px;
}

.title img {
  margin-right: 10px;
}

.benefits,
.rules {
  font-size: 18px;
}
</style>
