import axios, { AxiosRequestConfig } from 'axios';

import { useEffect, useState } from 'react';
import { ResponseDto, Response, Optional } from '../../types';
import { message } from 'antd';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_HOST;

export const useAxios = <T extends ResponseDto>({
  url,
  method,
  data,
  cancelToken,
}: AxiosRequestConfig) => {
  const [response, setResponse] = useState({} as any); // TODO fix any
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async ({
    url,
    method,
    data,
    cancelToken,
  }: AxiosRequestConfig): Promise<Optional<Response<T>>> => {
    try {
      const response = await axios.request<Response<T>>({ url, method, data, cancelToken });
      setResponse(response.data);
      return response.data;
    } catch (error: any) {
      setError(error?.message ?? `Error while fetching ${url}`);
      message.error(error?.response?.data?.data?.message);
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
        cancelToken,
      });
    }
  }, []);

  return { data: response.data, error, isLoading, fetchData };
};
