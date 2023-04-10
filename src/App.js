import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import RegisterPage from "./pages/RegisterPage";
import { Context } from "./contexts/Context";


function App() {
  const obj = JSON.parse(localStorage.getItem("userToken"))
  const defaultUser = ("userToken" in localStorage) ? obj : {};
  const [user, setUser] = useState(defaultUser);
  const [products, setProducts] = useState([]);

  return (
    <Context.Provider value={{ user, setUser, products, setProducts }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/" element={ <HomePage /> } />
          <Route
            path="/login" element={ <LoginPage /> } />
          <Route
            path="/signup" element={ <RegisterPage /> } />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
