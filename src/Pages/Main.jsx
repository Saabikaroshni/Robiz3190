import '../Styles/main.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <img src="/logo2.png" alt="Company Logo" />
      <h1>Welcome  Allen</h1>
      <div className='button-container'>
        <Link to="/boostprofile"><button className='button'>BOOST PROFILE</button></Link>
        <Link to="#"><button className='button'>ADD BANNER</button></Link>
      </div>
    </div>
  );
}

export default Home;
