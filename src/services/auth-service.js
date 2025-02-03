export const loginBarber = async (email, passoword) => {
  const response = await fetch('localhost:8080/', {
    method:"POST",
    headers: {
        'Content-Type': 'application/json',  
    },
    body: JSON.stringify({email, passoword})
  });

  if (!response.ok) {
    throw new Error('Erro ao fazer login');
  }

  const data = await response.json();

  return data
}

export default loginBarber 