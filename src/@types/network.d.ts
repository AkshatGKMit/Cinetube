type ApiHeaders = {
  'content-type'?: string;
};

type ApiCallParams<T, Params = {}, Body = {}> = {
  url: string;
  method: ApiMethods;
  headers?: ApiHeaders;
  params?: Params;
  data?: Body;
};

type ApiCallSuccess<T> = {
  success: true;
  responseData: T;
};

type ApiCallFailure = {
  success: false;
  error: ApiCallError;
};

type ApiCallResponse<T> = ApiCallSuccess<T> | ApiCallFailure;

type ApiError = {
  code: number | string;
  message: string;
};
