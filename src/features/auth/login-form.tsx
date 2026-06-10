import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(event) => setEmail(event.target.value)} />
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Login</button>
    </form>
  );
}
