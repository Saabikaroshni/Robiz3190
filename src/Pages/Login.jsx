import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/login.css';

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
      password: !isPasswordValid,
    });
    setShowError(false);
    return !hasError;
  };

  const handleLoginClick = async () => {
    if (validate()) {
      const isEmail = mobileEmail.includes('@');
      if (isEmail) {
        try {
          await signInWithEmailAndPassword(auth, mobileEmail, password);
          navigate('/'); // ✅ Redirect to main (home) route
        } catch (error) {
          setShowError(true);
        }
      } else {
        // Mobile number login not implemented
        setShowError(true);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <img src="/logo2.png" alt="Company Logo" />
        <h3>Log In</h3>

        <h4>Email ID</h4>
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

        <button onClick={handleLoginClick}>LOG IN</button>
      </div>
    </div>
  );
}

export default Login;
