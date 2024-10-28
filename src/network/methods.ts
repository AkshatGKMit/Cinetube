import { AxiosResponse } from 'axios';
import axiosInstance from './instance';

async function _get<T, Params = {}>(url: string, config?: ApiCallParams<Params>): Promise<ApiCallResponse<T>> {
  const response = await axiosInstance.get(url, config);

  return response.data ?? response;
}

async function _post<T, Body, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> {
  const response = await axiosInstance.post(url, data, config);

  return response.data ?? response;
}

async function _put<T, Body, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> {
  const response = await axiosInstance.put(url, data, config);

  return response.data ?? response;
}

async function _delete<T, Body, Params = {}>(
  url: string,
  data: Body,
  config?: ApiCallParams<Params>,
): Promise<ApiCallResponse<T>> {
  const response = await axiosInstance.delete(url, { ...config, data });

  return response.data ?? response;
}

export { _get, _delete, _put, _post };
