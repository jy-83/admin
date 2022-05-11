import JYRequest from "./request";
import localCache from "@/utils/cache";

const jyRequest = new JYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      console.log("配置的请求成功拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("配置的请求失败拦截");
      return err;
    },
    responseInterceptor: (response) => {
      console.log("配置的响应成功拦截");
      return response.data.data;
    },
    responseInterceptorCatch: (err) => {
      console.log("配置的响应失败拦截");
      return err;
    }
  }
});

export default jyRequest;
