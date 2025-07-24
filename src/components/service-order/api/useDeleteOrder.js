import axios from "axios";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const deleteOrder = async (id) => {
    try {
     

        const response = await axios.put(`${import.meta.env.VITE_API_URL}/times/uncheck/${id}`, {

        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Erro ao desmarcar pedido");
    }
};

export const useDeleteOrder = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id) => deleteOrder(id),
        mutationKey: ["deleteOrder"],
        onSuccess: () => {
            queryClient.refetchQueries('listTimesToday')
        }
    });
};
