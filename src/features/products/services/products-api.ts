import type { Product } from "../product.ts";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function getProducts() {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Error cargando productos");
  }
  return response.json();
}

export async function getProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/api/products/${id}`);
  if (!response.ok) {
    throw new Error("Error cargando producto");
  }
  return response.json();
}

export async function createProduct(product: Product): Promise<Product> {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error creando producto");
  }
  return response.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error eliminando producto");
  }
}
