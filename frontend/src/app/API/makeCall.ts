/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeaderObj, IAPICallConfig } from './types';
import { API_ROUTE, cookieKeys } from 'utils/constants';
import axios, { AxiosResponse } from 'axios';
import APIError from './APIError';
import { baseErrors } from './ErrorCodes';
import Cookies from 'js-cookie';

const makeCall = async (config: IAPICallConfig) => {
  let authToken;

  try {
    const fullURL = `${API_ROUTE}${config.route}`;
    const header: HeaderObj = config.header || {};

    if (config.isSecureRoute) {
      authToken = Cookies.get(cookieKeys.authToken);
      header.Authorization = `Bearer ${authToken}`;
    }

    const response: AxiosResponse = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: { ...header },
      responseType: config.responseType || 'json',
      onUploadProgress: config.onUploadProgress,
    });

    if (response.statusText === 'OK') {
      return response.data;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
  } catch (error: any) {
    if (error?.response) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.code, response.data?.message);
    }
    throw new APIError(baseErrors.NETWORK);
  }
};

export default makeCall;
