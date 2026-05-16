export interface ApiResponse<T> {
  resultType: "SUCCESS";
  error: null;
  data: T;
}
export const success = <T>(data: T): ApiResponse<T> => ({
  resultType: "SUCCESS",
  error: null,
  data,
});

export interface ErrorDetail {
  errorCode: string;
  reason: string;
  data: unknown;
}

export interface FailResponse<T = null> {
  resultType: "FAIL";
  error: {
    errorCode: string;
    reason: string;
    data: T;
  };
  data: null;
}