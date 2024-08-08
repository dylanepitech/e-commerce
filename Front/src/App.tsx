import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext, AuthProvider } from "./hooks/AuthContext";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ProtectedAdminRoute from "./hooks/ProtectedAdminRoute";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import NewslatterPage from "./pages/NewslatterPage"; // Import correct

const AppRoutes: React.FC = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Toutes les routes non connectées */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/newslatter" element={<NewslatterPage />} />
      {/* Utilisation du composant NewslatterPage */}
      {/* Routes User connecté */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
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
