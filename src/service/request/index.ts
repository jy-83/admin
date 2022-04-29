import axios from "axios";
import { AxiosInstance } from "axios";
import { JYAxiosRequestConfig } from "./type";
import { ElLoading } from "element-plus";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

const DEFAULT_SHOW_LOADING = true;
class JYRequest {
  instance: AxiosInstance;
  showLoading: boolean;
  loading?: LoadingInstance;
  constructor(config: JYAxiosRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_SHOW_LOADING;
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            text: "加载中...",
            background: "rgba(0,0,0,.5)"
          });
        }
        return config;
      },
      (err) => {
        console.log("请求失败拦截");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("响应成功拦截");
        this.loading?.close();
        return res.data.data;
      },
      (err) => {
        console.log("响应失败拦截");
        this.loading?.close();
        return err;
      }
    );
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch
    );
  }
  request<T = any>(config: JYAxiosRequestConfig<T>): Promise<T> {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    if (config.showLoading === false) {
      this.showLoading = false;
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          this.showLoading = DEFAULT_SHOW_LOADING;
          resolve(res);
        })
        .catch((err) => {
          this.showLoading = DEFAULT_SHOW_LOADING;
          reject(err);
        });
    });
  }
  get<T = any>(config: JYAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = any>(config: JYAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  patch<T = any>(config: JYAxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
  delete<T = any>(config: JYAxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "delete" });
  }
}

export default JYRequest;
