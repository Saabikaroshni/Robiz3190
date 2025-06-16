import React, { useState } from 'react';
import "../Styles/login.css";

const Recovery = () => {
  const [mobileEmail, setMobileEmail] = useState('');
  const [errors, setErrors] = useState({ email: false });
  const [showError, setShowError] = useState(false);

  const validate = () => {
    const isEmail = mobileEmail.includes('@') && mobileEmail.includes('.com');
    const isValid = isEmail;

    setErrors({ email: !isValid });
    setShowError(!isValid);

    return isValid;
  };

  const handleGenerateOtp = () => {
    if (validate()) {
      // 
    }
  };

  return (
    <div className='wrapper'>
      <div className="login-container">
        <img src="/logo2.png" alt="Company Logo" />
        <h2>Account Recovery</h2>
        <h4>Enter Your Registered Email ID</h4>
        <input
          type="text"
          className={`login-input ${errors.email ? 'input-error' : ''}`}
          value={mobileEmail}
          onChange={(e) => setMobileEmail(e.target.value)}
        />
        {showError && (
          <p className="error-message">
            <span className="error-icon">⚠</span> Invalid Email Address
          </p>
        )}
        <button onClick={handleGenerateOtp}>Generate OTP</button>
      </div>
    </div>
  );
};

export default Recovery;
