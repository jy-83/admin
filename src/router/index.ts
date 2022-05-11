import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import localCache from "@/utils/cache";
import { firstMenu } from "@/utils/map-menus";
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
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

router.beforeEach((to) => {
  if (to.path !== "login" && to.path !== "/") {
    const token = localCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    console.log(firstMenu);
    return firstMenu.path;
  }
});

export default router;
