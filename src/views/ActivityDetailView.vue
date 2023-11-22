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
        <SimilarActivities :activities="activities" />
      </div>
      <div class="right-half">
        <ActivityDetail :details="activityDetails" :activity="activity" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ActivityDetail from "../components/ActivityDetail.vue";
import InfoIncluded from "../components/InfoIncluded.vue";
import SimilarActivities from "../components/SimilarActivities.vue";
import ActivityCarousel from "../components/ActivityCarousel.vue";
import store from "@/store/store";

export default defineComponent({
  components: {
    ActivityDetail,
    ActivityCarousel,
    InfoIncluded,
    SimilarActivities,
  },
  beforeMount() {
    let id = this.$route.params.id;
    if (Array.isArray(id)) {
      id = id[0];
    }
    store.dispatch("fetchActivityDetails", { id: id });
  },
  computed: {
    activities(): any[] {
      return store.state.activities;
    },
    activityDetails(): any {
      return store.state.activityDetails;
    },
    activity(): any {
      if (this.activityDetails && this.activityDetails.activity) {
        return JSON.parse(this.activityDetails.activity);
      }
      return null;
    },
    imgArray(): string[] {
      if (this.activityDetails && this.activityDetails.activity) {
        return JSON.parse(this.activityDetails.activity).image;
      }
      return [];
    }
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
  max-width: 50%;
  margin-top: 35px;
  margin-bottom: 50px;
  margin-left: 50px;
}

.right-half {
  flex: 1;
  padding: 20px;
  margin-top: 30px;
  max-height: 800px;
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
  margin-left: -330px;
}

.title {
  margin-left: -300px;
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 24px;
}
</style>
