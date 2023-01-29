import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestDataOptions } from '.';

const ROOT_API = 'http://localhost:5000';

interface RequestInterceptor {
  url: string;
  options?: RequestDataOptions;
}

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

export async function requestpostInfo(body: response, method: RequestMethod, options = {}, dryRun?: boolean) {
  try {
    const response = await requestData(url, {
      ...options,
      method,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000, // add timeout
      softTimeout: 3000,
      cache: 'no-cache', // add 'no-cache' for safe
      credentials: 'same-origin',
    });
    return response;
  } catch (e) {
    throw e;
  }
}

export async function getInfo(shopId: string, options = {}) {
  // todo: refactor hard coding of shopId and change base_url(environment)
  // URL : http://stg-rsitem-webapp.rwasp-stg.hnd2.bdd.local/shops/287705/shop-info
  const url = `${BASE_URL}/test`;

  try {
    const response = await requestData(url, {
      ...options,
      method: 'get',
      credentials: 'same-origin',
      timeout: 60000,
    });
    const shopInfoData = await response.json();
    return shopInfoData;
  } catch (e) {
    throw e;
  }
}
