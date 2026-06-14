import { Navigate, Routes, Route } from "react-router-dom";
import { LoginPage } from "../../features/auth/login-page";
import { ProductsPage } from "../../features/products/products-page";
import { ProductPage } from "../../features/products/product-page";
import { NewProductPage } from "../../features/products/new-product-page";
import { ProtectedRoute } from "./protected-route";
import { NotFoundPage } from "../../features/not-found/not-found-page.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/new"
        element={
          <ProtectedRoute>
            <NewProductPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id"
        element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
