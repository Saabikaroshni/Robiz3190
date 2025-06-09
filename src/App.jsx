import React from 'react'
import Login from './Pages/Login'
import Main from './Pages/Main'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Business from './Pages/Business'
import Rotary from './Pages/Rotary'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  
    <BrowserRouter>
     
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<About />} />
          <Route path="business" element={<Business />} />
          <Route path="rotary" element={<Rotary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App