// import  { useState } from 'react';
// import '../Styles/main.css';
// import Login from './Login';

// const Home = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const handleLoginClick = () => {
//     setShowLogin(true);
//   };
//   const closeLogin = () => {
//     setShowLogin(false);
//   };
//   return (
//     <div>
//       <section className="content">
//         <img src="/logo.png" alt="Robiz Logo" />
//               <button className="cta-button">REGISTER YOUR BUSINESS</button>
//         <p>
//           Existing user? <span onClick={handleLoginClick} className="login-link">Login</span>
//         </p>
//       </section>
//       {showLogin && (
//         <div className="login-overlay">
//           <div className="close-icon" onClick={closeLogin}>×</div>
//           <Login />
//         </div>
//       )}
//     </div>
//   );
// };
// export default Home;
import React from 'react';
import '../Styles/main.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>ROBIZ 3190</h1>
      <div className="buttons">
        <Link to="/login">
          <button className="btn">LOG IN</button>
        </Link>
        <Link to="/register">
          <button className="btn">REGISTER</button>
        </Link>
      </div>
      <p>RI DISTRICT 3190 INITIATIVE</p>
    </div>
  );
}

export default Home;
