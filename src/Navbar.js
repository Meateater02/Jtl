import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        JTL
      </a>
      {/* <div className="hamburger"> */}
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Products</a>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
