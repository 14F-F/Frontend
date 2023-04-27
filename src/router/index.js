import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestsView from "../views/TestsView.vue";
import CreateView from "../views/CreateView.vue";
import SolveView from "../views/SolveView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import SettingsView from "../views/SettingsView.vue";

import LoginView from "../views/user/LoginView.vue";
import RegisterView from "../views/user/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tests/:id/:param",
      name: "tests",
      component: TestsView,
    },
    {
      path: "/create/:userId",
      name: "create",
      component: CreateView,
    },
    {
      path: "/solve/:userId/:testId",
      name: "solve",
      component: SolveView,
    },
    {
      path: "/stats/:userId",
      name: "stats",
      component: StatisticsView,
    },
    {
      path: "/settings/:userId",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    }
  ],
});

export default router;
