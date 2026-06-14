type ProductCardProps = {
  producto: string;
};
export function ProductCard(props: ProductCardProps) {
  return <div>{props.producto}</div>;
}
