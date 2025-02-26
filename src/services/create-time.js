import axios from "axios"

const createTime = async  (name,numberPhone,date,time)  => {
    dataTime = { 
        horario: time,
        data: date,
        nome: name,
        teletone: numberPhone,
        barbeiroNome: "Maikon"
      
    }

    dataError = {
        messege: "Horario não disponivel"
    }

    axios.post(`${import.meta.env.VITE_API_URL}/auth/march`,dataTime)
    .then(response => response.data)
    .catch(() => dataError )

}

export default createTime;