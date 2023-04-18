import axios, { AxiosRequestConfig } from 'axios';

import { useEffect, useState } from 'react';
import { ResponseDto, Response } from '../../types';

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

  const fetchData = async () => {
    try {
      const result = await axios.request<Response<T>>({ url, method, data, cancelToken });
      setResponse(result.data);
    } catch (error: any) {
      console.log(error, '============================');
      setError(error?.message ?? `Error while fetching ${url}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // execute once only

  return { data: response.data, error, isLoading, setResponse };
};
