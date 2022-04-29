import { AxiosRequestConfig } from "axios";
export interface JYInterceptors<T = any> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (response: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface JYAxiosRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: JYInterceptors<T>;
  showLoading?: boolean;
}
