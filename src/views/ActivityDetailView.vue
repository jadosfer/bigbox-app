<template>
  <div>
    <div class="container">
      <div class="left-half">
        <router-link
          class="back-link"
          to="/activities"
          style="text-decoration: none; color: inherit"
        >
          <img
            class="arrow-icon"
            src="@/assets/icons/arrow-icon.svg"
            alt="arrow"
          />
        </router-link>
        <ActivityCarousel :imageArray="imgArray" />
        <InfoIncluded :activity="activity" />
        <div class="title">
          <h3>Otras actividades similares:</h3>
        </div>
        <SimilarActivities :details="details" :activity="activity" />
      </div>
      <div class="right-half">
        <ActivityDetail :details="details" :activity="activity" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import ActivityDetail from "../components/ActivityDetail.vue";
import InfoIncluded from "../components/InfoIncluded.vue";
import SimilarActivities from "../components/SimilarActivities.vue";
import ActivityCarousel from "../components/ActivityCarousel.vue";
import { fetchActivityDetails } from "../api/activities";

export default defineComponent({
  components: {
    ActivityDetail,
    ActivityCarousel,
    InfoIncluded,
    SimilarActivities,
  },
  setup() {
    const route = useRoute();
    const details = ref({});
    const activity = ref({});
    const imgArray = ref<string[]>([]);

    const fetchDetails = async (id: number) => {
      try {
        const data = await fetchActivityDetails(id);
        details.value = data;
        if (data.activity) {
          activity.value = JSON.parse(data.activity);
          imgArray.value = JSON.parse(data.activity).image;
        }
      } catch (error) {
        // Manejo de errores
      }
    };

    onMounted(async () => {
      let id = route.params.id;
      if (Array.isArray(id)) {
        id = id[0];
      }
      await fetchDetails(parseInt(id));
    });

    return { route, details, activity, imgArray };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}

.left-half {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%; /* Establece el ancho máximo */
  margin-top: 35px;
  margin-bottom: 50px;
  margin-left: 50px;
}

.right-half {
  flex: 1;
  padding: 20px;
  margin-top: 30px;
}

.back-link {
  text-decoration: none;
  color: #000000;
  display: flex;
  font-size: 50px;
}

.image {
  width: 100%;
  margin-top: 200px;
}

.arrow-icon {
  margin-left: -300px;
}

.title {
  margin-left: -300px;
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 24px;
  
}
</style>
