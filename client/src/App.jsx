import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';






function App() {

  return (
    
    
      <div>
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/User" element={<User />}/>
        </Routes>
       </BrowserRouter>
       sera 
      </div>
   
  )
}

export default App
