import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ActivitiesView from "@/views/ActivitiesView.vue";
import ActivityDetailView from "@/views/ActivityDetailView.vue";
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/activities",
    name: "Activities",
    component: ActivitiesView,
  },
  {
    path: "/activities/:id",
    name: "ActivityDetail",
    component: ActivityDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
