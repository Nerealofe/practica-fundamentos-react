import type React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token =
    localStorage.getItem("token") ?? sessionStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}
