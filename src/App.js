import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
          <Route path="/" exact element={<Home />} />

          <Route path="/cart" exact element={<Cart />} />

          <Route path="/login" exact element={<Login />} />

          <Route path="/register" exact element={<Register />} />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
