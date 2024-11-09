export interface IApiRes {
  message: string;
}

export interface IGetApiSuccessBase<T> extends IApiRes {
  data: T;
}
