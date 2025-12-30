import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="pro-navbar">
        <div className="logo">CoffeeHouse</div>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-box" onClick={closeMenu}>Home</Link>
          <Link to="/menu" className="nav-box" onClick={closeMenu}>Drink</Link>
          <Link to="/dessert" className="nav-box" onClick={closeMenu}>Dessert</Link>
          <Link to="/about" className="nav-box" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="nav-box" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
      
      {/* Overlay for mobile */}
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </>
  );
}

export default Navbar;