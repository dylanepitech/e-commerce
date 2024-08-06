import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext, AuthProvider } from "./hooks/AuthContext";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./hooks/ProtectedAdminRoute";
import Dashboard from "./pages/Dashboard";
import ProtectedAdminRoute from "./hooks/ProtectedAdminRoute";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ResetPwdPage from "./pages/ResetPwdPage";
import ResetPwdBisPage from "./pages/ResetPwdBisPage";

const AppRoutes: React.FC = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Toutes les routes non connecter  */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/product" element={<ProductPage />} />

      {/* Routes User connecter */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpwd" element={<ResetPwdPage />} />
        <Route path="/resetpwdbis" element={<ResetPwdBisPage />} />
        {/* ici */}
      </Route>

      {/* Route Administrateur */}
      <Route element={<ProtectedAdminRoute />}>{/* ICI */}</Route>
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
