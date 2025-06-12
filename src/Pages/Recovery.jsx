import React, {useState} from 'react'
import "../Styles/login.css"
const Recovery = () => {
   const [mobileEmail, setMobileEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: false, password: false });
    const [showError, setShowError] = useState(false);
  
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
            <button className='button'>Generate OTP</button>
            
        </div>
    </div>
  )
}

export default Recovery