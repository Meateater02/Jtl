import React, { useState } from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [openHam, setHam] = useState(false);

  return (
    <nav>
      <div className="logo-container">
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
      </div>
      <div className="menu-container">
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
      </div>
    </nav>
  );
};

export default Navbar;
