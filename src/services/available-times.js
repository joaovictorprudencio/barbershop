import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

const listAllTimes = async () => {
  const [available, unavailable] = await Promise.all([
    axios.get(`${API_URL}/times/available`),
    axios.get(`${API_URL}/times/unavailable`),
  ]);


  const flatten = (data) => (Array.isArray(data) ? data.flat() : []);

  return [...flatten(available.data), ...flatten(unavailable.data)];
};


export const useAllTimes = () =>
  useQuery({
    queryKey: ['times'],
    queryFn: listAllTimes,
    staleTime: 1000 * 30,
    retry: 1,
  });
