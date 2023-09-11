import React, { useState } from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [openHam, setHam] = useState(false);

  return (
    <nav className="navigation">
      <Link to="/" className="company-name">
        Jane's Trading
      </Link>
      <img src={logo}></img>
      <div
        className="hamburger"
        onClick={() => {
          setHam(!openHam);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={openHam ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>

      {/* <div className="brand">
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
      </div> */}
    </nav>
  );
};

export default Navbar;
