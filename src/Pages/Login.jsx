import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [mobileEmail, setMobileEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: false, password: false });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const validate = () => {
    const isEmail = mobileEmail.includes('@') && mobileEmail.includes('.com');
    const isNumber = /^[1-9][0-9]{9}$/.test(mobileEmail);
    const isValid = isEmail || isNumber;
    const isPasswordValid = password.length >= 6;

    const hasError = !(isValid && isPasswordValid);
    setErrors({
      email: !isValid,
      password: !isPasswordValid
    });
    setShowError(hasError); 

    return !hasError;
  };

  const handleLoginClick = () => {
    if (validate()) {
      navigate('/main');
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <img src="/logo2.png" alt="Company Logo" />
        <h2>Log In</h2>

        <h4>Mobile Number / Email</h4>
        <input
          type="text"
          className={`login-input ${errors.email ? 'input-error' : ''}`}
          value={mobileEmail}
          onChange={(e) => setMobileEmail(e.target.value)}
        />

        <h4>Password</h4>
        <div className="password-wrapper">
          <input
            type="password"
            className={`login-input ${errors.password ? 'input-error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {showError && (
          <p className="error-message">
            <span className="error-icon">⚠</span> Invalid Credentials
          </p>
        )}

        <Link to="/recovery"><p>Forgot Password?</p></Link>
        
   <button className="button" onClick={handleLoginClick}>
          LOG IN
        </button>

      </div>
    </div>
  );
}
export default Login;
