import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "NaiveCrontab",
      component: () => import("@/views/naive/index.vue"),
    },
    {
      path: "/el",
      name: "ElCrontab",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/elementplus/index.vue"),
    },
  ],
});

export default router;
