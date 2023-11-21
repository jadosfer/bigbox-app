<template>
  <div>
    <ActivityList
      :activities="displayedActivities"      
    />
    <ActivityPaginator
      v-if="dataLoaded"
      @call-goToPage="goToPage"
      :totalPages="totalPages"
      :currentPage="currentPage"
      :pagesToShow="pagesToShow"
      :maxPages="maxPages"
      :totalCount="totalCount"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import ActivityList from "../components/ActivityList.vue";
import ActivityPaginator from "../components/ActivityPaginator.vue";
import { fetchActivities, fetchHeader } from "../api/activities";

export default defineComponent({
  components: {
    ActivityList,
    ActivityPaginator,
  },
  setup() {
    const pageSize = 9;
    const maxPages = 7;
    const currentPage = ref(1);
    const totalCount = ref(0);
    const activities = ref([]);

    const totalPages = computed(() => Math.ceil(totalCount.value / pageSize));

    const fetchData = async (page: number) => {
      try {
        const data = await fetchActivities(page, pageSize);
        activities.value = data;
        dataLoaded.value = true;
      } catch (error) {
        // Manejo de errores
      }
    };

    const getHeader = async () => {
      try {
        const data = await fetchHeader();
        totalCount.value = data["x-total-count"];
      } catch (error) {
        // Manejo de errores
      }
    };

    const displayedActivities = computed(() => {
      return activities.value;
    });

    const pagesToShow = computed(() => {
      const halfMaxPages = Math.floor(maxPages / 2);
      let start = Math.max(1, currentPage.value - halfMaxPages);
      let end = start + maxPages - 1;

      if (end > totalPages.value) {
        end = totalPages.value;
      }

      if (start > totalPages.value - maxPages) {
        start = totalPages.value - maxPages + 1;
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    });

    const goToPage = (page: number) => {
      currentPage.value = page;
      fetchData(page);
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchData(currentPage.value);
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchData(currentPage.value);
      }
    };

    const dataLoaded = ref(false);    

    onMounted(async () => {
      await getHeader();
      await fetchData(currentPage.value);
    });

    return {
      maxPages,
      pagesToShow,
      currentPage,
      totalPages,
      displayedActivities,
      totalCount,
      goToPage,
      nextPage,
      prevPage,
      dataLoaded
    };
  },
});
</script>

<style scoped>
/* Estilos */
</style>
