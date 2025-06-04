import React from 'react';
import '../Styles/Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-container">
      <img src="/logo2.png" alt="Company Logo" className="logo" />
      <h2>REGISTER</h2>
      <input type="email" placeholder="Email ID" />
      <input type="text" placeholder="Mobile Number(Rotary org. reg. no.)" />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      
      
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button className="btn"><Link to="/profile" className='link'>REGISTER</Link></button>
      <p>Already have an account? <Link to="/login" className="link-login">LOG IN</Link></p>
    </div>
  );
}

export default Register;
