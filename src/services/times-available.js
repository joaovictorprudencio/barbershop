import axios from "axios"




const listTimesAvailable = async () => {

  return await axios.get(`${import.meta.env.VITE_API_URL}/times/available`)
    .then(response => response.data)
    .catch(() => [])

}





export default listTimesAvailable 