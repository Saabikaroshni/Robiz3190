import React from 'react';
import '../Styles/navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/main" || location.pathname === "/recovery") {
    return null;
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo2.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <img src="/Profile.png" alt="Profile" className="profile-pic" />
        <h5>Allen</h5>
      </div>
    </nav>
  );
};

export default Navbar;
