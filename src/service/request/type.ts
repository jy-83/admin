import { AxiosRequestConfig } from "axios";
export interface JYInterceptors<T = any> {
  requestInterceptor?: (config: JYAxiosRequestConfig) => JYAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface JYAxiosRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: JYInterceptors<T>;
  showLoading?: boolean;
  headers?: any;
}
