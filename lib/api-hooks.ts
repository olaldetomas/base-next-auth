import useSWR from 'swr';
import { getApi } from './api';

interface Response {
  data: object;
  isLoading: boolean;
  isError: boolean;
}

export const useGetUser = (): Response => {
  const { data, error } = useSWR('/user', getApi);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
