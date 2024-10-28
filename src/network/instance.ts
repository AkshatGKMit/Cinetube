import ApiConstants from '@constants/api';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorHandler } from './errors';
import Toast from 'react-native-toast-message';

const { BASE_URL, headers } = ApiConstants;

const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

function interceptorResponse<T>(response: AxiosResponse<ApiCallSuccess<T>>): AxiosResponse<ApiCallSuccess<T>> {
  if (!response.data.success) {
    throw new Error(response.statusText || 'Unknown error occurred');
  }

  const apiSuccess: ApiCallSuccess<T> = { success: true, responseData: response.data as T };

  response.data = apiSuccess;

  return response;
}

function interceptorError(error: AxiosError): ApiCallFailure {
  const apiError = ErrorHandler(error);

  const apiFailure: ApiCallFailure = { success: false, error: apiError };
  return apiFailure;
}

instance.interceptors.response.use(interceptorResponse, interceptorError);

const _get = <T, Params = {}>(url: string, config?: ApiCallParams<Params>): Promise<ApiCallResponse<T>> => {
  return instance.get(url, config);
};

const _post = <T, Body, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> => {
  return instance.post(url, data, config);
};

const _put = <T, Body, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> => {
  return instance.put(url, data, config);
};

const _delete = <T, Body = {}, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> => {
  return instance.delete(url, { ...config, data });
};

export { _get, _delete, _put, _post };
