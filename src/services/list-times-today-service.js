import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const listTimesToday = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/times/unavailable`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const useListTimesToday = () => {
  return useQuery({
    queryKey: ["listTimesToday"],
    queryFn: listTimesToday,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
