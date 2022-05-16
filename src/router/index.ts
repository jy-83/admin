import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
    name: "main",
    children: []
  },
  {
    path: "/uniapp",
    component: () => import("@/views/uniapp/uniapp.vue")
  },
  {
    path: "/echarts",
    component: () => import("@/views/echarts/echarts.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
