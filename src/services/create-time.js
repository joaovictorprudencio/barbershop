import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const createTime = async  ({name,numberPhone,date,time})  => {
    console.log("Parâmetros recebidos:", { name, numberPhone, date, time }); 
    try {
        

        const dataTime = {
            horario: time,
            data: date,
            nome: name,
            telefone: numberPhone,
            BarbeiroNome:"Maikon"
        };

        console.log("dados na função:",name,numberPhone, date,time)

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/march`, dataTime,  {
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
        mutationFn: (name,numberPhone,date,time) => createTime(name,numberPhone,date,time),
        mutationKey: ['create-time']
    })
}

export default createTime;