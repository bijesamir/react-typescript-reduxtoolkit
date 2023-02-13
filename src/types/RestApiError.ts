import { SerializedError } from "@reduxjs/toolkit";

interface ApiError {
  data?: {
    fullMessage?: string;
    shortMessage?: string;
    message?: string;
  };
  status?: number;
  errorAPI: string; //Example: 'Auth Refresh Token'
}

/**
 2 types of errors are thrown by RTK Query
 handled errors - handled errors returned from the query that will have a shape with properties like status, data
 unhandled errors - unhandled errors (thrown from places like transformResponse) are generally shaped as SerializedError that includes properties such as name, message, stack
 */
type RestApiError = ApiError | SerializedError;

export default RestApiError;
