import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="pro-navbar">

      <div className="logo">CoffeeHouse</div>

      <div className="nav-links">

        <Link to="/" className="nav-box">Home</Link>

        {/* Coffee Menu = /menu */}
        <Link to="/menu" className="nav-box">Drink</Link>

        {/* Dessert Menu = /dessert */}
        <Link to="/dessert" className="nav-box">Dessert</Link>

        {/* About = /about */}
        <Link to="/about" className="nav-box">About</Link>

        {/* Contact = /contact */}
        <Link to="/contact" className="nav-box">Contact</Link>

      </div>

    </nav>
  );
}

export default Navbar;