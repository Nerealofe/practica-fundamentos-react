import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Iphone" },
  { id: 2, name: "Radio" },
];

export function ProductPage() {
  const params = useParams();
  const product = products.find((product) => product.id === Number(params.id));

  return (
    <>
      <h1>Producto</h1>
      <h2>{product?.name}</h2>
      <p>Id: {product?.id}</p>
    </>
  );
}
