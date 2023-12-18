import { AxiosProgressEvent, Method, ResponseType } from 'axios';

export interface HeaderObj {
  Authorization?: string;
  RFTOKEN?: string;
}

export interface IAPICallConfig {
  route: string;
  method: Method;
  body?: object | FormData;
  query?: object;
  header?: HeaderObj;
  isSecureRoute: boolean;
  responseType?: ResponseType;
  dontRefresh?: boolean;
  onUploadProgress?: (event: AxiosProgressEvent) => void;
}
