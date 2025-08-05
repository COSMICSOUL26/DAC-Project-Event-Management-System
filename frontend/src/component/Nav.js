import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">EventCrew</div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
          Home
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>
          About
        </ScrollLink>
        <ScrollLink to="services" smooth={true} duration={500} onClick={closeMenu}>
          Services
        </ScrollLink>
        <ScrollLink to="why" smooth={true} duration={500} onClick={closeMenu}>
          Why Us
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
          Contact
        </ScrollLink>

        <div className="login-dropdown" onClick={() => setLoginOpen(!loginOpen)}>
          Login ▾
          {loginOpen && (
            <div className="login-menu">
              <Link to="/customer" onClick={() => { closeMenu(); setLoginOpen(false); }}>Customer</Link>
              <Link to="/employee" onClick={() => { closeMenu(); setLoginOpen(false); }}>Employee</Link>
            </div>
          )}
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
