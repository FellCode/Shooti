import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../Views/Dashboard.vue";
import NewTraining from "../Views/NewTraining.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/newTraining",
    name: "NewTraining",
    component: NewTraining
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
