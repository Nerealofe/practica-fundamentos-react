import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <p>La página solicitada no existe</p>
      <Link to="/products">Volver a productos</Link>
    </>
  );
}
