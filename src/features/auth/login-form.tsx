import React, { useState } from "react";
import { login } from "./services/auth-api.ts";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await login({
      username: email,
      password,
    });
    localStorage.setItem("token", response.accessToken);

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
