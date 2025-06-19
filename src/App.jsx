import React from 'react'
import Login from './Pages/Login'
import Recovery from './Pages/Recovery'
import Home from './Pages/Home'
import Nav from './Pages/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 
  return (
  
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<Recovery/>}/>            
              
      </Routes>
    </BrowserRouter>
  );
}

export default App