import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';
import Admin from './assets/components/Admin';
import Agencia from './assets/components/agencia';
import Empresa from './assets/components/Empresa';






function App() {

  return (
    
    
      <div>
        navbar
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/User" element={<User />}/>
         <Route path="/Admin" element={<Admin />}/>
         <Route path="/Agencia" element={<Agencia />}/>
         <Route path="/Empresa" element={<Empresa />}/>
        </Routes>
       </BrowserRouter>
       sera 
      </div>
   
  )
}

export default App
