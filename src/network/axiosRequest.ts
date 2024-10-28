import ApiConstants from '@constants/api';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ErrorHandler } from './errors';

async function apiRequest<T, Params = {}, Body = {}>(params: ApiCallParams<T, Params, Body>): Promise<ApiCallResponse<T>> {
  const { BASE_URL, headers } = ApiConstants;

  const config: AxiosRequestConfig = {
    ...params,
    baseURL: BASE_URL,
    headers: { ...headers, ...params.headers },
  };

  try {
    const { data }: AxiosResponse<T> = await axios(config);

    return {
      success: true,
      responseData: data,
    };
  } catch (error) {
    const axiosError = error as AxiosError;
    const { code, message } = ErrorHandler(axiosError);

    return {
      success: false,
      error: {
        status: code,
        message,
      },
    };
  }
}

export default apiRequest;
