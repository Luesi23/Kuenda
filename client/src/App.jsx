import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';
import Admin from './assets/components/Admin';
import Agencia from './assets/components/agencia';
import Empresa from './assets/components/Empresa';
import DataComponent from './assets/components/Data';
import  UserTable  from './assets/Dashboard/UserTable';
import Navbar from './assets/components/Navbar';
import UserUpdate  from './assets/components/UserUpdate';
import AdminTable from './assets/components/AdminTable';
import AdminUpdate from './assets/components/AdminUpdate';
import { DashboardLayout } from './assets/Dashboard/DashboardLayout';
import Dashboard from './assets/Dashboard/Dashboard';
import DashboardHome from './assets/Dashboard/DashboardHome';
import MenuDash from './assets/Dashboard/MenuDash';
import Sidebar from './assets/Dashboard/Sidebar';
import DashHeader from './assets/Dashboard/DashHeader';
import MainDash from './assets/Dashboard/MainDash';
import Footer from './assets/components/Footer';
import UserTableView from './assets/components/UserTableView';
import EmpresaTable from './assets/components/EmpresaTable ';
import EmpresaTableView from './assets/components/EmpresaTableView';
import Rotas from './assets/components/Rotas';
import Searchbox from './assets/components/Searchbox';
import Secondpage from './assets/components/Secondpage';
import Cadastro from './assets/components/Cadastro';
import Login from './assets/components/Login';
import AcessoNegado from './assets/components/AcessoNegado';
import Monitorizacao from './assets/components/Monitorizacao';






function App() {
  return (
    
    
      <div>     
       <BrowserRouter>
        <Routes>
          <Route path="AcessoNegado" element={<AcessoNegado />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
        <Route path="/*" element={ <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Searchbox" element={<Searchbox />} />
                <Route path="/Secondpage" element={<Secondpage />} />
                <Route path="/Monitorizacao" element={<Monitorizacao />} />
                <Route path="/User" element={<User />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Empresa" element={<Empresa />} />
                <Route path="/Data" element={<DataComponent />} />
                <Route path="/UserUpdate/:id" element={<UserUpdate />} />
                <Route path="/AdminUpdate/:id" element={<AdminUpdate />} />
                <Route path="/AdminUpdate" element={<AdminUpdate />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="/Rotas" element={<Rotas />} />
                <Route path="AcessoNegado" element={<AcessoNegado />} />
             
              
              </Routes>
              <Footer />
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
          <Route path="UserTableView" element= {<UserTableView />} />
          <Route path="UserTable" element={<UserTable />} />
          <Route path="AdminTable" element={<AdminTable />} />
          <Route path="Agencia" element={<Agencia />} />
          <Route path="empresatable" element={<EmpresaTable />} />
          <Route path="empresatableview" element={<EmpresaTableView />} />
         

        </Route>
        </Routes>

       
       </BrowserRouter>
      </div>
      
   
  )
}

export default App
