import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/views/login/LoginPage.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
