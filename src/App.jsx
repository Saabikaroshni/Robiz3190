import React from 'react'
import Login from './Pages/Login'
import Recovery from './Pages/Recovery'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import Navbar from './Pages/Navbar'


import BoostProfile from './Pages/BoostProfile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
   const user = {
    displayName: 'Jeetendra',
    photoURL: '/Profile.png',
  };
  return (
  
    <BrowserRouter>
      <Nav user={user}/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<Recovery/>}></Route>
        
      
         
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App