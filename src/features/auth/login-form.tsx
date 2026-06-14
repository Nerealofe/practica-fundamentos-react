import { useState } from "react";
import type { SubmitEvent } from "react";
import { login } from "./services/auth-api.ts";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const response = await login({
      username: email,
      password,
    });
    localStorage.setItem("token", response.accessToken);
    navigate("/products");

    console.log("Sesion iniciada");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
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
      <button type="submit">Login</button>
    </form>
  );
}
