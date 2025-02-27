import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const createTime = async  (name,numberPhone,date,time)  => {
    const dataTime = { 
        horario: time,
        data: date,
        nome: name,
        teletone: numberPhone,
        barbeiroNome: "Maikon"
      
    }

    const dataError = {
        messege: "Horario não disponivel"
    }

    axios.post(`${import.meta.env.VITE_API_URL}/auth/march`,dataTime)
    .then(response => {
        return response.data
    })
    .catch(() => dataError )

}

export const useCreateTime = () => {
    return useMutation({
        mutationFn: (name,numberPhone,date,time) => createTime(name,numberPhone,date,time),
        mutationKey: ['create-time']
    })
}

export default createTime;