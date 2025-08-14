import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import Dayjs  from "dayjs";

const createTime = async ({ name, numberPhone, date, time }) => {
    console.log("Parâmetros recebidos:", { name, numberPhone, date, time });
    try {

      

     const dateWithTime = Dayjs(`${date}T03:00:00.000Z`);

     console.log("data a ser enviada :", dateWithTime.toISOString());
        

    
       
        const dataTime = {
            available: false,
            date: dateWithTime.toISOString(),
            time: time,
            nameCustumer: name,
            phoneCustumer: numberPhone,
        };

        console.log("dados na função:", name, numberPhone, date, time)

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/times/march`, dataTime, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao marcar horário:", error);
        throw error;
    }

}

export const useCreateTime = () => {
    return useMutation({
        mutationFn: (name, numberPhone, date, time) => createTime(name, numberPhone, date, time),
        mutationKey: ['create-time']
    })
}

export default createTime;