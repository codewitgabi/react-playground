import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function ShopApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/auth/register" element={ <RegisterPage /> } />
        <Route path="/auth/login" element={ <LoginPage />} />
      </Routes>
    </>
  );
}


export default ShopApp;
