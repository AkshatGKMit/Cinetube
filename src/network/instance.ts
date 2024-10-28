import ApiConstants from '@constants/api';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorHandler } from './errors';

const { BASE_URL, headers } = ApiConstants;

const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

function interceptorResponse<T>(response: AxiosResponse<ApiCallResponse<T>>): AxiosResponse<ApiCallResponse<T>> {
  if (!response.data.success) {
    throw new Error(response.statusText || 'Unknown error occurred');
  }

  const apiSuccess: ApiCallSuccess<T> = { success: true, responseData: response.data as T };
  return { ...response, data: apiSuccess };
}

function interceptorError(error: AxiosError): ApiCallFailure {
  const apiError = ErrorHandler(error);

  const apiFailure: ApiCallFailure = { success: false, error: apiError };
  return apiFailure;
}

instance.interceptors.response.use(interceptorResponse, interceptorError);

export default instance;
