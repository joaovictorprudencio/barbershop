import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

const fetchRevenueMonth = async ({ year, month }) => {
  const response = await axios.get(`${API_URL}/revenues/${year}/${month}`);
  return response.data;
};

const fetchRevenueYear = async (year) => {
  const response = await axios.get(`${API_URL}/revenues/${year}`);
  return response.data;
};

export const useRevenueMonth = (year, month) => {
  return useQuery({
    queryKey: ["revenueMonth", year, month],
    queryFn: () => fetchRevenueMonth({ year, month }),
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
};

export const useRevenueYear = (year) => {
  return useQuery({
    queryKey: ["revenueYear", year],
    queryFn: () => fetchRevenueYear(year),
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
};

export default { useRevenueMonth, useRevenueYear };
