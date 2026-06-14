const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Error cargando productos");
  }
  return response.json();
}
