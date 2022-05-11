import { createStore, Store, useStore as useVuexStore } from "vuex";
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
