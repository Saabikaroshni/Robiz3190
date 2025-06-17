import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import "../Styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
const Nav = ({ user }) => {
  const [userData, setUserData] = useState({});
  const auth = getAuth();

  const location = useLocation();
  if(location.pathname==="/"||location.pathname==="/recovery"){
    return null;
  }

    useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.email));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav className="navbar">
        <div><img src="/logo2.png" alt="" className="logo" /></div>
        <div className="navbar-left">
              <img src={userData.photoURL || '/Profile.png'} alt="Profile" className="profile"/>
               <div className="flex-col"><span className="text">Welcome, {userData.displayName || 'User'}</span></div>
        </div>

    </nav>
  );
};

export default Nav;

{/* <img  src={user?.photoURL || '/default-profile.jpg'} alt="Profile" className="profile"/>
            <div className="flex-col"><span className="text">Welcome, {user?.displayName || 'User'}</span></div> */}

