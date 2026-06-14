import { ProductCard } from "./product-card";
import type { Product } from "../product";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products-api";

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    <>
      <h3>Lista de productos </h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
