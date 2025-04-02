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
import AdminUpdate from './assets/components/AdminUpdate';
import { DashboardLayout } from './assets/Dashboard/DashboardLayout';
import Dashboard from './assets/Dashboard/Dashboard';
import DashboardHome from './assets/Dashboard/DashboardHome';
import LOGO from './assets/svg/LOGO.svg';
import MenuDash from './assets/Dashboard/MenuDash';
import Sidebar from './assets/Dashboard/Sidebar';
import Logo from './assets/Dashboard/Logo';
import DashHeader from './assets/Dashboard/DashHeader';
import MainDash from './assets/Dashboard/MainDash';
import Footer from './assets/components/Footer';






function App() {
  return (
    
    
      <div>     
       <BrowserRouter>
        <Routes>
        <Route path="/*" element={ <>
              <Navbar />
            <div className='m-5'>  <img src={LOGO} alt="" /> </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User" element={<User />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Agencia" element={<Agencia />} />
                <Route path="/Empresa" element={<Empresa />} />
                <Route path="/Data" element={<DataComponent />} />
                <Route path="/Rota" element={<Rota />} />
                <Route path="/UserTable" element={<UserTable />} />
                <Route path="/UserUpdate/:id" element={<UserUpdate />} />
                <Route path="/AdminTable" element={<AdminTable />} />
                <Route path="/AdminUpdate/:id" element={<AdminUpdate />} />
                <Route path="/AdminUpdate" element={<AdminUpdate />} />
                <Route path="/Footer" element={<Footer />} />
              </Routes>
              <p>footer</p>
            </>
          }
        />

<Route path="/dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="DashboardHome" element= {<DashboardHome />} />
          <Route path="Menu" element= {<MenuDash />} />
          <Route path="SideBar" element= {<Sidebar />} />
          <Route path="DashHeader" element= {<DashHeader />} />
          <Route path="Main" element= {<MainDash />} />
        </Route>
        </Routes>

       </BrowserRouter>
       <p className="logo">#test</p>
      </div>
   
  )
}

export default App
