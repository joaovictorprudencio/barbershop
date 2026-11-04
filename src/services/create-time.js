import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Dayjs from 'dayjs';

const createTime = async ({ name, numberPhone, date, time }) => {
  const dateWithTime = Dayjs(`${date}T00:00:00.000Z`);

  const payload = {
    available: false,
    date: dateWithTime.toISOString(),
    time,
    nameCustumer: name,
    phoneCustumer: numberPhone,
  };

  const response = await axios.post(`${import.meta.env.VITE_API_URL}/times/march`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export const useCreateTime = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => createTime(payload),
    mutationKey: ['create-time'],
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['times'] }),
  });
};

export default createTime;
