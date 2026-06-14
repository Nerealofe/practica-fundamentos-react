import { ProductCard } from "./product-card";
import type { Product } from "../product";

const products: Product[] = [
  {
    id: 1,
    name: "Iphone",
    price: 500,
    tags: ["mobile"],
    image: "",
    isOnSale: true,
    description: "Teléfono en buen estado",
  },
  {
    id: 2,
    name: "Radio",
    price: 40,
    tags: ["lifestyle"],
    image: "",
    isOnSale: false,
    description: "Radio antigua",
  },
];

export function ProductsList() {
  return (
    <>
      <h3>Lista de productos </h3>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
