/*
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-11 16:41:54
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-12 16:07:40
 * @FilePath: /admin/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from "vuex";
import { IRootState } from "./type";

const store = createStore<IRootState>({
  state() {
    return {
      user: "蒋轶",
      age: 26
    };
  }
});
//处理浏览器刷新 初始化数据
export default store;
