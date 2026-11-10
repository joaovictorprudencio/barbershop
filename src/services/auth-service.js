const AUTH_STORAGE_KEY = 'barbershop.authSession';
const AUTH_SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export const clearAuthSession = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

export const getAuthToken = () => {
  const storedSession = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedSession) return null;

  try {
    const session = JSON.parse(storedSession);
    const isValid =
      typeof session?.token === 'string' &&
      session.token.trim().length > 0 &&
      Number.isFinite(session?.expiresAt) &&
      session.expiresAt > Date.now();

    if (!isValid) {
      clearAuthSession();
      return null;
    }

    return session.token;
  } catch {
    clearAuthSession();
    return null;
  }
};

const saveAuthSession = (token) => {
  if (typeof token !== 'string' || token.trim().length === 0) {
    throw new Error('A resposta de autenticação não contém um token válido');
  }

  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify({
      token,
      expiresAt: Date.now() + AUTH_SESSION_DURATION_MS,
    }),
  );
};

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

  saveAuthSession(data?.token);

  return data;
};

export default loginBarber;
