import type { Product } from "../product";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <h3>
        <Link to={`/products/${product.id}`}> {product.name} </Link>
      </h3>
      <p>{product.price} €</p>
      <p>{product.isOnSale ? "En oferta" : "No está en oferta"}</p>
      <p>{product.tags.join(", ")}</p>
    </article>
  );
}
