import { useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProduct } from "./services/products-api.ts";
import type { Product } from "./product";
import { useState, useEffect } from "react";

export function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (!params.id) return;

    getProductById(params.id).then((product) => {
      setProduct(product);
    });
  }, [params.id]);

  async function handleDelete() {
    if (!product) return;

    await deleteProduct(product.id);
    navigate("/products");
  }

  return (
    <>
      <h1>Producto</h1>

      <h2>{product?.name}</h2>
      <p>Precio: {product?.price} €</p>
      <p>{product?.isOnSale ? "En oferta" : "No esta en oferta"}</p>
      <p>Tags: {product?.tags.join(",")}</p>
      <p>{product?.description}</p>

      <button onClick={() => setShowConfirm(true)}>Borrar producto</button>
      {showConfirm && (
        <div>
          <p>¿Seguro que quieres borrar este producto?</p>
          <button onClick={handleDelete}>Confirmar</button>
          <button onClick={() => setShowConfirm(false)}>Cancelar</button>
        </div>
      )}
    </>
  );
}
