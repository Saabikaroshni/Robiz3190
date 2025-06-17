import React,{ useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // use only this
import "../Styles/navbar.css";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [userData, setUserData] = useState({
    displayName: 'User',
    photoURL: '/Profile.png',
  });

  const location = useLocation();
 

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userDocRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          setUserData({
            displayName: data.displayName || 'User',
            photoURL: data.photoURL || '/default-avatar.png',
          });
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  });

  return () => unsubscribe();
}, []);

 if (location.pathname === "/" || location.pathname === "/recovery") {
    return null;
  }

  return (
    <nav className="navbar">
      <div><img src="/logo2.png" alt="" className="logo" /></div>
      <div className="navbar-left">
        <img src={userData.photoURL} alt="Profile" className="profile"/>
        <div className="flex-col">
          <span className="text">Welcome, {userData.displayName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


{/* <img  src={user?.photoURL || '/default-profile.jpg'} alt="Profile" className="profile"/>
            <div className="flex-col"><span className="text">Welcome, {user?.displayName || 'User'}</span></div> */}

