import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../../features/auth/login.page.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
