/* eslint-disable no-undef */
export const loginBarber = async (email, password) => {

  try {

    const response = await fetch(`${import.meta.env.API_URL}/auth/login`, {
    method:"POST",
    headers: {
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
       return err.messege;
  }
  
}

export default loginBarber 