import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestDataOptions } from '.';

const ROOT_API = 'http://localhost:5000';

interface RequestInterceptor {
  url: string;
  options?: RequestDataOptions;
};

export const composeAxiosInstance = (requestInterceptor: RequestInterceptor) => {
  const axiosInstance = axios.create({
    baseURL: `${ROOT_API}/`,
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  // @ts-ignore
  axiosInstance.interceptors.request.use(requestInterceptor);

  return axiosInstance;
};
