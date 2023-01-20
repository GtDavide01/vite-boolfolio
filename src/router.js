import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppProject from "./pages/AppProject.vue";
import AppNotfound from "./pages/AppNotfound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProject,
    },
    {
      path: "/:pathMath(.*)*",
      name: "notfound",
      component: AppNotfound,
    },
  ],
});

export { router };
