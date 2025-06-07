import React from "react";
import { NavLink } from "react-router-dom";
import "./Skylar.css";

const Navbar = ({ onBookingClick }) => {
    
  return (
    <header className="navbar">
      <nav className="navbar__left">
        <NavLink to="/" className="nav-link">HOME</NavLink>
        <NavLink to="/services" className="nav-link">SERVICES</NavLink>
        <NavLink to="/portfolio" className="nav-link">TATTOOS</NavLink>
        <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
        <NavLink to="/about" className="nav-link">ABOUT</NavLink>
      </nav>

      <div className="navbar__center">
        <img src="/skylar.svg" alt="Лого" className="navbar-logo" />
      </div>

      <div className="navbar__right">
        <a href="https://www.instagram.com/toskaart.tattoo/" target="_blank" rel="noreferrer">
        <img src="/instagram.svg" alt="" />
        </a>
        <a href="https://t.me/notvangogh" target="_blank" rel="noreferrer">
          <img src="/telegram.svg" style={{ height: "25px" }} alt="" />
        </a>
        <button onClick={onBookingClick} className="booking-btn">BOOKING</button>
      </div>
    </header>
  );
};

export default Navbar;
