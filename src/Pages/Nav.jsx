import React, { useEffect, useState, useRef } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/navbar.css';

const Nav = () => {
  const [userData, setUserData] = useState({
    displayName: 'User',
    photoURL: '/Profile.png',
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();

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
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  // Hide navbar on login and recovery pages
  if (location.pathname === '/login' || location.pathname === '/recovery') return null;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="navbar">
      <div><img src="/logo2.png" alt="Logo" className="logo" /></div>

      <div className="navbar-left" ref={dropdownRef}>
        <img
          src={userData.photoURL}
          alt="Profile"
          className="profile"
          onClick={() => setShowDropdown(!showDropdown)}
          style={{ cursor: 'pointer' }}
          title="Click for menu"
        />
        <div className="flex-col">
          <span className="text">Welcome, {userData.displayName}</span>
        </div>

        {showDropdown && (
          <div className="dropdown-menu">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;





{/* <img  src={user?.photoURL || '/default-profile.jpg'} alt="Profile" className="profile"/>
            <div className="flex-col"><span className="text">Welcome, {user?.displayName || 'User'}</span></div> */}

