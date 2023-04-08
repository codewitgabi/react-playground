import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Nav from "./components/Nav";
import { UserContext } from "./contexts/UserContext";


function App() {
  const obj = JSON.parse(localStorage.getItem("userToken"))
  const defaultUser = ("userToken" in localStorage) ? obj : {};
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/" element={ <HomePage /> } />
          <Route
            path="/login" element={ <LoginPage /> } />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
