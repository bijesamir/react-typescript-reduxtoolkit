import axios, { AxiosError, AxiosRequestConfig, Method } from 'axios';
//import App from '../../baseApp'

export const axiosInstance = axios.create({
  baseURL: `https://catfact.ninja/fact`,
  headers: {
    Origin: '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const authToken = localStorage.getItem('newRentalToken') ? localStorage.getItem('newRentalToken') : null;
  const configWithAuthorization = {
    ...config,
    headers: {
      ...config.headers,
      authorization: authToken,
    },
  };
  return configWithAuthorization;
});

const serverRequest =
  (method: Method = 'POST') =>
  (url: string) =>
  async (
    data: AxiosRequestConfig,
    options = {
      params: {},
      withResponseHeader: false,
      withResponseComplete: false,
    }
  ) => {
    const query = {
      method,
      url,
      data,
    };
    if (options.params) {
      //query.params = options.params;
    }

    try {
      let result = await axiosInstance(query);
      if (options.withResponseComplete) {
        return result;
      }

      if (options.withResponseHeader) {
        return {
          headers: {
            ...result.headers,
            status: result.status,
          },
          ...result.data,
        };
      }
      return result.data;
    } catch (error) {
      // check if the error was thrown from axios
      if (axios.isAxiosError(error)) {
        // do something
        // or just re-throw the error
        throw error;
      } else {
        // do something else
        // or creating a new error
        throw new Error('different error than axios');
      }
      //const errors = error as AxiosError;
      //throw errors.response;
    }
  };

export const getRequest = serverRequest('GET');
export const postRequest = serverRequest('POST');
export const putRequest = serverRequest('PUT');
export const deleteRequest = serverRequest('DELETE');

export default serverRequest;
