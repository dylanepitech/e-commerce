import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext, AuthProvider } from "./hooks/AuthContext";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./hooks/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProtectedAdminRoute from "./hooks/ProtectedAdminRoute";
import CategoryPage from "./pages/CategoryPage";
import { ChakraProvider } from '@chakra-ui/react'
import ProductPage from "./pages/ProductPage";

import ResetPwdPage from "./pages/ResetPwdPage";
import ResetPwdBisPage from "./pages/ResetPwdBisPage";
import CGVCGUPage from "./pages/CGVCGUPage";

import TestReq from "./test/testReq";
import TestUserComplements from "./test/testUserComplements";
import TestCarts from "./test/testCart";
import TestOrders from "./test/testOrders";
import TestReductions from "./test/testReduction";
import TestWishlists from "./test/testWishlist";
import RestrictedRoute from "./hooks/RestrictedRoute";
import CartPage from "./pages/CartPage";


const AppRoutes: React.FC = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ChakraProvider>

      <Routes>
        {/* Toutes les routes non connecter  */}
        <Route element={<RestrictedRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cgvcgu" element={<CGVCGUPage />} />
        <Route path="/resetpwd" element={<ResetPwdPage />} />
        <Route path="/resetpwdbis" element={<ResetPwdBisPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Routes User connecter */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/testuser" element={<TestReq />} />
          <Route path="/testusercomplement" element={<TestUserComplements />} />
          <Route path="/testcart" element={<TestCarts />} />
          <Route path="/testorder" element={<TestOrders />} />
          <Route path="/testwishlist" element={<TestWishlists />} />
          {/* ici */}
        </Route>

        {/* Route Administrateur */}
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testreduction" element={<TestReductions />} />
          <Route path="/profile/:id" element={<Profile />} />

        </Route>
      </Routes>
    </ChakraProvider>
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
