import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

const AppContent = () => {
  const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const location=useLocation();
  const isLoginPage=location.pathname === '/login'
  return (
   <>
      {!isLoginPage && token && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/:id"
          element={
            <ProtectedRoute>
              <UserDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isLoginPage && token && <Footer />}
   </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
