/* eslint-disable no-undef */


const ListTimesToday = async () => {

    try {
        const token = localStorage.getItem("authToken");

        console.log("token: " , token)

        const response = await fetch(`${import.meta.env.VITE_API_URL}/horarios`, {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            errorData = await response.json();
  
        }

        const data = await response.json() || [];



        return data

    } catch (err) {
        return [];
    }


}

export default ListTimesToday