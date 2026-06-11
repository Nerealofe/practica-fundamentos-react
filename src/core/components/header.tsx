import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <h1>Nerepop</h1>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/products/new">Nuevo Producto</NavLink>
      <NavLink to="/login">Iniciar sesión</NavLink>
    </>
  );
}
