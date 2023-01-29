// tslint:disable:no-any
import 'url-polyfill';

/**
 * Available request methods + jsonp
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export type RequestMethod =
  | 'jsonp'
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';

export interface RequestDataOptions {
  /** Object as { key: value } to send parameters in the GET request */
  data?: { [key: string]: any };
  /** Number of times to retry if the API call fails. Default to `0` */
  retry?: number;
  /** Milliseconds to wait before retrying the request if needed. By default `[1000, 2000, 4000]` */
  retryDelay?: number[];
  /**
   * If specified, the request will be resolved with this response code.
   * This has no effect when `options.method` is set to `JSONP`.
   */
  mockCode?: number;
  /**
   * If specified, the request will be resolved with this data.
   * Any valid object that can be converted to JSON is ok.
   * (`undefined`, `NaN`, etc. are not JSON-serializable)
   */
  mockData?: any;
  /**
   * If specified (milliseconds), the request won't be resolved
   * before that time. Ignored if `options.mockTimeout` is specified.
   */
  mockDelay?: number;
  /**
   * If `true`, the request will fail as `reject('timeout')`,
   * after `timeout` seconds.
   */
  mockTimeout?: boolean;
  /** Timeout (in milliseconds) for the request. `3000` by default (`9000` for mobile devices) */
  timeout?: number;
  /**
   * Time (in milliseconds) to trigger the `onSoftTimeout` hook (`undefined`-disabled by default)
   * Unless `timeout`, this doesn't apply to each retry, but to the whole `requestData` call only once
   */
  softTimeout?: number;
  /** Request method as `get` (default), `jsonp`, `post`, `head`, ... */
  method?: RequestMethod;
  /** Request headers as `{ key: value }` */
  headers?: { [key: string]: string } | Headers;
  /** Body for _POST_ requests (must be stringified if it's complex data) */
  body?: any;
  /** Request mode */
  mode?: RequestMode;
  /** Credentials */
  credentials?: RequestCredentials;
  /** Referrer policy */
  referrer?: ReferrerPolicy;
  /** Cache mode */
  cache?: RequestCache;
  /** Seconds to cache internally the request (0 to disable). `30` by default */
  rCache?: number;
  /** Store the cached data to make it persistent or not `false` by default */
  rCachePersistent?: boolean;
  /**
   * Name of the parameter for the callback when `method` is `jsonp`.
   * By default, `callback`.
   */
  jsonpCallback?: string;
  /**
   * Name of the function to use as a callback when `method` is `jsonp`.
   * If not specified, it will be a random function name
   */
  jsonpFunction?: string;

  /** Refreshing the cache with new data with the same key */
  isRefreshCache?: boolean;
}

export type RequestDataHookBeforeCall = (
  url: string,
  options?: RequestDataOptions,
  next?: (url: string, options?: RequestDataOptions) => Promise<Response>
) => Promise<Response>;

// requestData global settings are initialized with the default options
const defaultOptions: RequestDataOptions = {
  credentials: 'omit',
  retry: 0, // no retries
  retryDelay: [1000, 2000, 4000], // tslint:disable-line:no-magic-numbers
  rCache: 30, // cache the data for 30s to avoid same requests
  rCachePersistent: false, // do not cache the data if the page is reloaded
  timeout: 3000, // tslint:disable-line:no-magic-numbers
  method: 'get', // GET request by default
};

/**
 * Extended fetch/jsonp wrapper to request data.
 *
 * 1. Apply all the registered 'beforeCall' hooks as middlewares (if any)
 *   - Middlewares can cancel the request, therefore nothing will be done
 *   - Middlewares can change the options (final options will be passed to the step 2)
 * 2. Execute. First, check:
 *   1. If the response is already cached, return its value directly (end)
 *   2. If there's already another request trying to fetch this data (to be cached but pending),
 *      wait for it (to be resolved in 3.2.3 / rejected in 3.3.2)
 *   3. If timeout simulation is set, wait and reject it
 *   4. If delay simulation is set, wait and do the first try (step 3)
 *   5. No timeout + No simulation, do the first try directly (step 3)
 * 3. TryOnce:
 *   1. doRequest
 *     1. Get the Response data
 *       1. If there's any mock response defined use it as a Response
 *       2. If there's no mock, try doing the real request (jsonp/fetch)
 *     2. When the Response is ready:
 *       1. If it's OK (2xx/3xx responses), resolve it (go to 3.2)
 *       2. If it's an error (other codes), reject it (go to 3.3)
 *     3. If the data doesn't come in time (timeout), fail the request (go to 3.3)
 *   2. If the request succeed:
 *     1. If cache is allowed, store it for future requests to be finished in 2.1
 *     2. Resolve the request (end)
 *     3. If there is any pending request (from 2.2), resolve (and end) them
 *   3. If the request fails:
 *     1. If there are still retries to do, try again (go to step 3)
 *     2. If we reached the limit of retries:
 *       1. Reject the request (end)
 *       2. Apply the registered 'onFail' hooks (only to the original request)
 *       3. If there is any pending request (from 2.2), reject (and end) them
 *
 * @param  url     URL of the API to call
 * @param  options Options for the request
 * @return         Promise resolved to a Response when the requested data is available
 */
// export async function requestData(url: string, options?: RequestDataOptions): Promise<Response> {
//   const beforeCallHooks =
//     options && options.hooks && options.hooks.beforeCall
//       ? hooks.beforeCall.concat(options.hooks.beforeCall)
//       : hooks.beforeCall;
//   /**
//    * Get the next function to execute (middleware or the actual request)
//    */
//   function getNextFunction(index: number): any {
//     return index === beforeCallHooks.length
//       ? execute
//       : (u: string, o: RequestDataOptions) => beforeCallHooks[index](u, o, getNextFunction(index + 1));
//   }

//   return getNextFunction(0)(url, { ...defaultOptions, ...options });
// }
