import React from "react";
import {  NavLink } from "react-router-dom";
import "../components/Views/Navbar.css"
const Navbar = props => {
  return (
  <nav>
    <div className="nav-wrapper green lighten-1">
      <a href="/#" className="brand-logo left">Logo</a>
      <ul className="right">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/help">Help 24/h</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/account">Account</NavLink></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
