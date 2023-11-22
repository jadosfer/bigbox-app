import { createStore } from "vuex";
import {
  fetchActivities,
  fetchHeader,
  fetchActivityDetails,
} from "../api/activities";

interface State {
  activities: any[];
  activityDetails: any;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  dataLoaded: boolean;
}

const store = createStore<State>({
  state: {
    activities: [],
    activityDetails: {},
    currentPage: 1,
    totalPages: 0,
    pageSize: 9,
    totalCount: 0,
    dataLoaded: false,
  },
  mutations: {
    setActivities(state, activities: any[]) {
      state.activities = activities;
    },
    setActivityDetails(state, activityDetails: any[]) {
      state.activityDetails = activityDetails;
    },
    setCurrentPage(state, page: number) {
      state.currentPage = page;
    },
    setTotalPages(state, totalPages: number) {
      state.totalPages = totalPages;
    },
    setTotalCount(state, totalCount: number) {
      state.totalCount = totalCount;
    },
    setDataLoaded(state, loaded: boolean) {
      state.dataLoaded = loaded;
    },
  },
  actions: {
    async fetchActivities({ commit, state }, { page, pageSize }) {
      try {
        const data = await fetchActivities(page, pageSize);
        commit("setActivities", data);
        commit("setCurrentPage", page);
        commit("setDataLoaded", true);
      } catch (error) {
        console.error("Error fetching activities:", error);
        throw new Error("Failed to fetch activities");
      }
    },
    async fetchHeader({ commit }) {
      try {
        const header = await fetchHeader();
        commit("setTotalCount", header["x-total-count"]);
      } catch (error) {
        console.error("Error fetching header:", error);
        throw new Error("Failed to fetch header");
      }
    },
    async fetchActivityDetails({ commit, state }, { id }) {
      try {
        const data = await fetchActivityDetails(id);
        commit("setActivityDetails", data);
        commit("setDataLoaded", true);
      } catch (error) {
        console.error("Error fetching activityDetails:", error);
        throw new Error("Failed to fetch activityDetails");
      }
    },

    goToPage({ state, dispatch }, page: number) {
      dispatch("fetchActivities", {
        page,
        pageSize: state.pageSize,
      });
    },
    nextPage({ state, dispatch }) {
      const nextPage = state.currentPage + 1;
      if (nextPage <= state.totalPages) {
        dispatch("fetchActivities", {
          page: nextPage,
          pageSize: state.pageSize,
        });
      }
    },
    prevPage({ state, dispatch }) {
      const prevPage = state.currentPage - 1;
      if (prevPage >= 1) {
        dispatch("fetchActivities", {
          page: prevPage,
          pageSize: state.pageSize,
        });
      }
    },
    cleanStore({ commit }) {
      commit("setActivityDetail", null);
    },
  },
  getters: {
    getActivities(state) {
      return state.activities;
    },
    getActivityDetails(state) {
      return state.activityDetails;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
    getTotalPages(state) {
      return state.totalPages;
    },
    getTotalCount(state) {
      return state.totalCount;
    },
    getDataLoaded(state) {
      return state.dataLoaded;
    },
  },
});

export default store;