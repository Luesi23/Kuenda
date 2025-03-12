import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';
import Admin from './assets/components/Admin';
import Agencia from './assets/components/agencia';
import Empresa from './assets/components/Empresa';
import DataComponent from './assets/components/Data';
import Rota from './assets/components/Rota';






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
         <Route path="/Data" element={<DataComponent />}/>
         <Route path="/Rota" element={<Rota />}/>
        </Routes>
       </BrowserRouter>
       sera 
      </div>
   
  )
}

export default App
