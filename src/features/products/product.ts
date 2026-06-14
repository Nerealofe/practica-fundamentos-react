export type Product = {
  id: number;
  name: string;
  price: number;
  tags: string[];
  image?: string;
  isOnSale: boolean;
  description: string;
};
