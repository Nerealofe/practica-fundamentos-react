const API_URL = import.meta.env.VITE_API_BASE_URL;

type LoginCredentials = {
  username: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

export async function login(
  credentials: LoginCredentials,
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas");
  }

  return response.json();
}
