import React from "react";
import "../Styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
const Nav = ({ user }) => {
  const location = useLocation();
  if(location.pathname==="/"){
    return null;
  }
  return (
    <nav className="navbar">
        <div><img src="/logo2.png" alt="" className="logo" /></div>
        <div className="navbar-left">
            <img  src={user?.photoURL || '/default-profile.jpg'} alt="Profile" className="profile"/>
            <div className="flex-col"><span className="text">Welcome, {user?.displayName || 'User'}</span></div>
        </div>

    </nav>
  );
};

export default Nav;

{/*<img  src={user?.photoURL || '/default-profile.jpg'} alt="Profile" className="profile-image"/>
   <span className="welcome-text">Welcome, {user?.displayName || 'User'}</span> */}