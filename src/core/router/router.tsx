import { Navigate, Routes, Route } from "react-router-dom";
import { LoginPage } from "../../features/auth/login-page";
import { ProductsPage } from "../../features/products/products-page";
import { ProductPage } from "../../features/products/product-page";
import { NewProductPage } from "../../features/products/new-product-page";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/new" element={<NewProductPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}
