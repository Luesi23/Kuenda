import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dano from './Dano';
import User from './assets/components/User';






function App() {

  return (
    
    
      <div>
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Dano />}/>
         <Route path="/User" element={<User />}/>
        </Routes>
       </BrowserRouter>
       sera 
      </div>
   
  )
}

export default App
