import React, { useEffect, useState } from 'react';
import Login from './Pages/Login'
import Recovery from './Pages/Recovery'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import Logo from './Pages/Logo';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import "./Styles/App.css"


function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);
  if (loading) return <Logo/>;

  return (
    
    <BrowserRouter>
      {/* <Nav></Nav> */}
      <Routes>
       <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/recovery" element={<Recovery/>}/>            
              
      </Routes>
    </BrowserRouter>
  );
}

export default App