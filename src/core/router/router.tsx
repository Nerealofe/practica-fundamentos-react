import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../features/auth/login-page.tsx";
import { ProductsPage } from "../../features/products/products-page.tsx";
import { ProductPage } from "../../features/products/product-page.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
    </Routes>
  );
}
