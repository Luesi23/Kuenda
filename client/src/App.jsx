import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import user from './pages/user';
import add from './pages/add';
import update from './pages/update';




function App() {

  return (
    
    
      <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<user />} />
          <Route path="/Add" element={add}/>
          <Route path="/Update" element={<update/>}/>
        </Routes>
       </BrowserRouter>
      </div>
      
   
  )
}

export default App
