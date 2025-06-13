import React from 'react'
import Login from './Pages/Login'
import Recovery from './Pages/Recovery'
import Main from './Pages/Main'
import Navbar from './Pages/Navbar'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import About from './Pages/About'
import BoostProfile from './Pages/BoostProfile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<Recovery/>}></Route>
        <Route path=""></Route>
        <Route path="/boostprofile" element={<BoostProfile/>}></Route>
        <Route path="navbar" element={<Navbar/>}></Route>
      
         
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App