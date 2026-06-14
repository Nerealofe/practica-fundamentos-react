import { useState } from "react";
import type { SubmitEvent } from "react";
import { login } from "./services/auth-api";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberSession, setRememberSession] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const response = await login({
      username: email,
      password,
    });

    if (rememberSession) {
      localStorage.setItem("token", response.accessToken);
    } else {
      sessionStorage.setItem("token", response.accessToken);
    }

    console.log("Sesión iniciada");
    navigate("/products");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Usuario</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <label htmlFor="rememberSession">Recordar sesión</label>
      <input
        id="rememberSession"
        type="checkbox"
        checked={rememberSession}
        onChange={(event) => setRememberSession(event.target.checked)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
