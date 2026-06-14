import { ProductCard } from "./product-card";
import type { Product } from "../product";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products-api";
import { NavLink } from "react-router-dom";

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLocaleLowerCase()
      .includes(nameFilter.toLocaleLowerCase());

    const matchesPrice = maxPrice === "" || product.price <= Number(maxPrice);

    return matchesName && matchesPrice;
  });
  return (
    <>
      <h3>Lista de productos </h3>
      {filteredProducts.length === 0 && (
        <>
          {" "}
          <p>No hay productos que mostrar</p>
          <NavLink to="/products/new">Crear un producto</NavLink>{" "}
        </>
      )}

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <label htmlFor="nameFilter">Filtrar por nombre</label>
      <input
        id="nameFilter"
        value={nameFilter}
        onChange={(event) => setNameFilter(event.target.value)}
      />
      <label htmlFor="maxPrice">Precio máximo</label>
      <input
        id="maxPrice"
        type="number"
        value={maxPrice}
        onChange={(event) => setMaxPrice(event.target.value)}
      />
    </>
  );
}
