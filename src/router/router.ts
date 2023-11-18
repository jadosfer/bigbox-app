import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ActivitiesView from "@/views/ActivitiesView.vue";
import ActivityDetailView from "@/views/ActivityDetailView.vue";

const routes: Array<RouteRecordRaw> = [
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
  {
    path: "/",
    redirect: "/activities", // Redirecciona a /activities por defecto
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
