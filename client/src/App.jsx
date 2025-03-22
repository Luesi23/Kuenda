import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';
import Admin from './assets/components/Admin';
import Agencia from './assets/components/agencia';
import Empresa from './assets/components/Empresa';
import DataComponent from './assets/components/Data';
import Rota from './assets/components/Rota';
import  UserTable  from './assets/components/UserTable';
import Navbar from './assets/components/Navbar';
import UserUpdate  from './assets/components/UserUpdate';
import AdminTable from './assets/components/AdminTable';






function App() {

  return (
    
    
      <div>
    
      
       <BrowserRouter>
       <Navbar />
        
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/User" element={<User />}/>
         <Route path="/Admin" element={<Admin />}/>
         <Route path="/Agencia" element={<Agencia />}/>
         <Route path="/Empresa" element={<Empresa />}/>
         <Route path="/Data" element={<DataComponent />}/>
         <Route path="/Rota" element={<Rota />}/>
         <Route path="/UserTable" element={<UserTable />}/>
         <Route path="/UserUpdate/:id" element={< UserUpdate/>}/>
         <Route path="/AdminTable" element={< AdminTable/>}/>
        </Routes>
       </BrowserRouter>
       sera 
      </div>
   
  )
}

export default App
