import React, { useState } from "react";
import logo from "./Logo_Transparent.png";
import "./Navbar.css";
import { Squash as Hamburger, Squash } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Jane's Trading
      </a>
      <img src={logo}></img>
      <Hamburger className="hamburger">
        <Squash toggled={isOpen} toggle={setOpen}></Squash>
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="#products">Products</a>
      </Hamburger>
    </nav>
  );
};

export default Navbar;
