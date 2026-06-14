import type { Product } from "../product";

type ProductCardProps = {
  product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.price} €</p>
      <p>{product.isOnSale ? "En oferta" : "No está en oferta"}</p>
      <p>{product.tags.join(", ")}</p>
    </article>
  );
}
