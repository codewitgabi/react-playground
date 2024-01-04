import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import VerifyOTP from "./pages/VerifyOTP";

function ShopApp() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage user={ user } />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/login" element={<LoginPage setUser={ setUser } />} />
        <Route path="auth/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </>
  );
}

export default ShopApp;
