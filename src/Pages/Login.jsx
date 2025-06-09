import React from 'react';
import '../Styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="wrapper">
      <div className="login-container">
        <img src="/logo2.png" alt="Company Logo" />
        <h2>Log In</h2>
        <h4>Mobile Number</h4>
        <input type="text" className="login-input" />
        <h4>Password</h4>
        <input type="password" className="login-input" />
        <p className="forgot">Forgot Password?</p>
        <Link to="/main"><button>LOG IN</button></Link>
        {/* <p>Don't have an account? <Link to="/register" className="register-link">REGISTER</Link></p> */}
      </div>
    </div>
  );
}

export default Login;
