import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import MainView from "../views/MainView.vue";

import store from "../store";

const routes = [
  {
    path: "/welcome",
    name: "Welcome",
    component: WelcomeView,
  },
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name === "Main" &&
    (!store.state.kittenName || !store.state.kittenUrl)
  ) {
    next({ name: "Welcome" });
  }
  next();
});

export default router;
