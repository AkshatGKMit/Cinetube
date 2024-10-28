import ApiConstants from '@constants/api';
import axios from 'axios';

const { BASE_URL, headers } = ApiConstants;

const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

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
