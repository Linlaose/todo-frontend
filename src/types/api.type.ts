export interface IApiRes {
  message: string;
}

export interface IGetApiSuccessBase<T> extends IApiRes {
  data: T;
}
export interface IGetApiSuccessBaseWithAmount<T> extends IApiRes {
  data: T;
  total: number;
}
