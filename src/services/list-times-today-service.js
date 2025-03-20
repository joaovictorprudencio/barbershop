/* eslint-disable no-undef */

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const listTimesToday = async () => {
    try {
        const token = localStorage.getItem("authToken") || ""; // Garante que não será null

        console.log("Token:", token);

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/horarios`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        return response.data;
    } catch (err) {
        console.error("Erro ao buscar horários:", err);
        return [];
    }
};

export const useListTimesToday = () => {
    return useQuery({
        queryKey: ["listTimesToday"],
        queryFn: listTimesToday,
        staleTime: 1000 * 60 * 5,
        retry: 1
    });
};
