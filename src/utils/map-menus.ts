import { RouteRecordRaw } from "vue-router";
import { IBread } from "@/base-ui/breadcrumb";
let firstMenu: any = null;
export function mapMenuToRoutes(menu: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context("../router/main", true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) {
          routes.push(route);
        }
        if (!firstMenu) {
          firstMenu = route;
        }
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  };
  _recurseGetRoute(menu);
  return routes;
}
export function pathMapToBreadcrumb(menus: any[], currentPath: string) {
  const breadcrumb: IBread[] = [];
  pathMapToMenu(menus, currentPath, breadcrumb);
  return breadcrumb;
}
export function pathMapToMenu(
  menus: any[],
  currentPath: string,
  breadcrumb?: IBread[]
): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadcrumb?.push({ name: menu.name });
        breadcrumb?.push({ name: findMenu.name, url: findMenu.url });
        return findMenu;
      }
    } else if (menu.type === 2 && currentPath === menu.url) {
      return menu;
    }
  }
}

export { firstMenu };
