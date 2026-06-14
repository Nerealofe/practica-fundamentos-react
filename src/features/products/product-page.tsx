import { useParams } from "react-router-dom";
import { getProductById } from "./services/products-api.ts";
import type { Product } from "./product";
import { useState, useEffect } from "react";

export function ProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    if (!params.id) return;

    getProductById(params.id).then((product) => {
      setProduct(product);
    });
  }, [params.id]);

  return (
    <>
      <h1>Producto</h1>

      <h2>{product?.name}</h2>
      <p>Precio: {product?.price} €</p>
      <p>{product?.isOnSale ? "En oferta" : "No esta en oferta"}</p>
      <p>Tags: {product?.tags.join(",")}</p>
      <p>{product?.description}</p>
    </>
  );
}
