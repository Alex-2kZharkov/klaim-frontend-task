import axios, { AxiosRequestConfig } from 'axios';
import { useContext, useEffect, useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import { ResponseDto, Response, Optional } from '../../types';
import { Routes } from '../../constants';
import { UserAction, UserContext } from '../../store';

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

  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);

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
      if (error?.response?.status === 403) {
        dispatch({ type: UserAction.signOut, payload: { isAuthenticated: false } });
        navigate(Routes.signIn);
      } else {
        message.error(
          error?.message ?? error?.response?.data?.data?.message ?? `Error while fetching ${url}`,
        );
      }
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
