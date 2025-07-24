/* eslint-disable no-undef */
export const loginBarber = async (email, password) => {

  try {

    const response = await fetch(`${import.meta.env.VITE_API_URL}/barbers/login`, {
    method:"POST",
    headers: {
      credentials: "include",
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({email: email, password: password})
  });

  if (!response.ok) {
    errorData = response.json()
    throw new Error(errorData.messege || "sem conexeão");
  }

  const data = await response.json();

  return data

  } catch(err){
    console.log("erro ao Fazer login: ", err)
       return err.messege ;
  }
  
}

export default loginBarber 