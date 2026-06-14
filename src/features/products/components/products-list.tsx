import { ProductCard } from "./product-card";

export function ProductsList() {
  const products = ["Iphone", "Radio", "Televisión"];
  return (
    <>
      <h3>Lista de productos </h3>
      {products.map((product) => (
        <ProductCard producto={product} />
      ))}
    </>
  );
}
