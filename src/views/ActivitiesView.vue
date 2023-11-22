<template>
  <div>
    <ActivityList :activities="activities" />
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
import { defineComponent } from "vue";
import ActivityList from "../components/ActivityList.vue";
import ActivityPaginator from "../components/ActivityPaginator.vue";
import store from "@/store/store";

export default defineComponent({
  components: {
    ActivityList,
    ActivityPaginator,
  },  
  data() {
    return {
      maxPages: 7,
      pageSize: 9,
    };
  },
  beforeMount() {
    store.dispatch("fetchActivities", { page: 1, pageSize: this.pageSize });
    store.dispatch("fetchHeader");
  },  
  computed: {
    currentPage(): number {
      return store.state.currentPage;
    },
    totalCount(): number {
      return store.state.totalCount;
    },
    activities(): any[] {
      return store.state.activities;
    },
    totalPages(): number {
      return Math.ceil((this.totalCount as number) / (this.pageSize as number));
    },
    pagesToShow(): number[] {
      const halfMaxPages = Math.floor((this.maxPages as number) / 2);
      let start = Math.max(1, (this.currentPage as number) - halfMaxPages);
      let end = start + (this.maxPages as number) - 1;

      if (end > (this.totalPages as number)) {
        end = this.totalPages as number;
      }

      if (start > (this.totalPages as number) - (this.maxPages as number)) {
        start = (this.totalPages as number) - (this.maxPages as number) + 1;
      }

      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    dataLoaded(): boolean {
      return store.state.dataLoaded;
    },
  },
  methods: {
    goToPage(page: number) {
      console.log("here");
      store.commit("setCurrentPage", page);
      store.dispatch("fetchActivities", {
        page: page,
        pageSize: this.pageSize,
      });
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      if (nextPage <= this.totalPages) {
        this.goToPage(nextPage);
      }
    },
    prevPage() {
      const prevPage = this.currentPage - 1;
      if (prevPage >= 1) {
        this.goToPage(prevPage);
      }
    },
  },
});
</script>

<style scoped>
</style>
