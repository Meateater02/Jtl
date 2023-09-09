import React from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="brand">
        <a href="/" className="brand-name">
          Jane's Trading
        </a>
        <img src={logo}></img>
      </div>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
