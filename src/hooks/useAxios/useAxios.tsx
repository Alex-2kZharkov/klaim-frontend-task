import axios, { AxiosRequestConfig } from 'axios';

import { useEffect, useState } from 'react';
import { ResponseDto, Response, Optional } from '../../types';
import { message } from 'antd';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_HOST;
axios.defaults.withCredentials = true; // to send httpOnly cookies automatically

export const useAxios = <T extends ResponseDto>({
  url,
  method,
  data,
  signal,
  params,
}: AxiosRequestConfig) => {
  const [response, setResponse] = useState({} as any); // TODO fix any
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async ({
    url,
    method,
    data,
    signal,
    params,
  }: AxiosRequestConfig): Promise<Optional<Response<T>>> => {
    try {
      setIsLoading(true);
      const response = await axios.request<Response<T>>({
        url,
        method,
        data,
        signal,
        params,
      });
      setResponse(response.data);
      return response.data;
    } catch (error: any) {
      message.error(
        error?.message ?? error?.response?.data?.data?.message ?? `Error while fetching ${url}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url && method) {
      fetchData({
        url,
        method,
        data,
        signal,
        params,
      });
    }
  }, []);

  return { data: response.data, isLoading, fetchData };
};
