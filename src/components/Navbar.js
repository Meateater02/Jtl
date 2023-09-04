import React from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Jane's Trading
      </a>
      <img src={logo}></img>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};

export default Navbar;
