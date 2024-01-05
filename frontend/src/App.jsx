import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VerifyOTP from "./pages/VerifyOTP";

function ShopApp() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage user={user} cart={cart} setCart={setCart} />}
        />
        <Route path="/auth/register" element={<RegisterPage cart={cart} />} />
        <Route
          path="/auth/login"
          element={<LoginPage setUser={setUser} cart={cart} />}
        />
        <Route path="auth/verify-otp" element={<VerifyOTP cart={cart} />} />
      </Routes>
    </>
  );
}

export default ShopApp;
