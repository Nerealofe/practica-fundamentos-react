import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <h1>Nerepop</h1>
      <NavLink to="/products">Productos</NavLink>
      <NavLink to="/products/new">Nuevo Producto</NavLink>
      <NavLink to="/login">Iniciar sesión</NavLink>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </>
  );
}
