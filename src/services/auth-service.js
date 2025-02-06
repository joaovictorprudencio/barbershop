export const loginBarber = async (email, password) => {
  const response = await fetch(`${import.meta.env.API_URL}/auth/login`, {
    method:"POST",
    headers: {
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({email: email, password: password})
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer login');
  }

  const data = await response.json();

  return data
}

export default loginBarber 