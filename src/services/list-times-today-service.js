/* eslint-disable no-undef */


const ListTimesToday = async () => {

    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${import.meta.env.API_URL}/list`, {

            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if(!response.ok) {
            errorData = await response.json();
            throw new Error(errorData.messege || "Sem conexão ")
        }

        const data = await response.json();

        return data

    } catch (err) {
         return err.messege;
    }


}

export default ListTimesToday