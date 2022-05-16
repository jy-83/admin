/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-11 16:41:48
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 10:31:58
 * @FilePath: /admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import "normalize.css";
import "@/assets/css/index.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "./App.vue";
import router from "@/router/index";
import store from "./store";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount("#app");
