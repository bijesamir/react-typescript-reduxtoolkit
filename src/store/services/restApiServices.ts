import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';

import RestApiError from '../../types/RestApiError';

export const apiServices = createApi({
  reducerPath: 'apiService',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    credentials: 'include',
  }) as BaseQueryFn<string | FetchArgs, unknown, RestApiError, {}, FetchBaseQueryMeta>,
  endpoints: (builder) => ({}),
});
