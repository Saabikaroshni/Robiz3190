import React from 'react';
import '../Styles/profile.css';
import { Link,Outlet, useLocation  } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/80" 
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-details">
          <h2 className="profile-name">Member Name</h2>
          <p className="profile-role">Dist. no. - Designation</p>
          <p className="profile-location">City, State, Country</p>
        </div>
      </div>
      <div className="profile-tabs">
        <Link to="/profile"><button className={`tab ${location.pathname === "/profile" ? "active" : ""}`}>About</button></Link>
        <Link to="/profile/business"><button className={`tab ${location.pathname === "/profile/business" ? "active" : ""}`}>Business</button></Link>
        <Link to="/profile/rotary"><button className={`tab ${location.pathname === "/profile/rotary" ? "active" : ""}`}>Rotary</button></Link>
      </div>
      <div className='tab-content'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Profile;
