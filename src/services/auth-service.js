export const loginBarber = async (email, password) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/barbers/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data?.messege ?? data?.message ?? 'Não foi possível autenticar');
  }

  return data;
};

export default loginBarber;
