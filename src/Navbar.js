import React from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Jane's Trading
      </a>
      <img src={logo}></img>
      {/* <div className="hamburger"> */}
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Products</a>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
