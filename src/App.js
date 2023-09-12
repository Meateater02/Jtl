import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { Home, About, Products } from "./components/pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
