import JYRequest from "./request";

const jyRequest = new JYRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("配置的请求成功拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("配置的请求失败拦截");
      return err;
    },
    responseInterceptor: (response) => {
      console.log("配置的响应成功拦截");
      return response;
    },
    responseInterceptorCatch: (err) => {
      console.log("配置的响应失败拦截");
      return err;
    }
  }
});
interface DataType {
  id: number;
  name: string;
  token: string;
}
jyRequest
  .request<DataType>({
    url: "/login",
    method: "post",
    interceptors: {
      requestInterceptor: (config) => {
        console.log("接口的单独请求成功拦截");
        return config;
      }
    },
    showLoading: false,
    data: {
      name: "coderwhy",
      password: "123456"
    }
  })
  .then((res) => {
    console.log(res.name);
  });
