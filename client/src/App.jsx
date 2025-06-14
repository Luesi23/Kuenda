import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './assets/components/User';
import Home from './assets/components/Home';
import Admin from './assets/components/Admin';
import Agencia from './assets/components/Agencia';
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
import Searchbox from './assets/components/Searchbox';
import Secondpage from './assets/components/Secondpage';
import Cadastro from './assets/components/Cadastro';
import Login from './assets/components/Login';
import AcessoNegado from './assets/components/AcessoNegado';
import Monitorizacao from './assets/components/Monitorizacao';
import Rota from './assets/Dashboard/Rota';
import MunicipioAutocomplete from './assets/Dashboard/MunicipioAutocomplete';
import Rotas from './assets/Dashboard/Rotas';
import Bilhetes from './assets/components/Bilhetes';
import Viagens from './assets/Dashboard/Viagens';
import AgenciaTable from './assets/components/AgenciaTable';
import ViagemCard from './assets/Dashboard/ViagemCard';
import ViagensList from './assets/Dashboard/ViagensList';
import SelecionarAssento from './assets/Dashboard/SelecionarAssento';
import AssentosSimples from './assets/Dashboard/AssentosSimples';
import FormularioReserva from './assets/components/FormularioReserva';
import ConsultarIngresso from './assets/Dashboard/ConsultarIngresso';
import CriarViagem from './assets/Dashboard/CriarViagem';
import CadastroAtendente from './assets/Dashboard/CadastroAtendente';
import MinhasViagens from './assets/components/MinhasViagens';
import ViagensListAutorizado from './assets/Dashboard/ViagensListAutorizado';


import DeveloperCard from './assets/components/DeveloperCard';
import Sobre from './assets/components/Sobre';
import TrabalheConnosco from './assets/components/TrabalheConnosco';
import Areainvestidor from './assets/components/areainvestidor';
import SaladeImprensa from './assets/components/SaladeImprensa';
import KuendaConfiavel from './assets/components/KuendaConfiavel';
import PoliticasPrivacidade from './assets/components/PoliticasdePrivacidade';
import TermosUso from './assets/components/TermosUso';
import AjudaParceiros from './assets/components/AjudaParceiros';


function App() {
  return (
    
    
      <div>     
       <BrowserRouter>
        <Routes>
          <Route path="AcessoNegado" element={<AcessoNegado />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path="/ConsultarIngresso" element={<ConsultarIngresso />} />
        <Route path="/*" element={ <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Searchbox" element={<Searchbox />} />
                <Route path="/Secondpage" element={<Secondpage />} />
                <Route path="/Bilhetes" element={<Bilhetes />} />
                <Route path="/Monitorizacao" element={<Monitorizacao />} />
                <Route path="/User" element={<User />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Empresa" element={<Empresa />} />
                <Route path="/Data" element={<DataComponent />} />
                <Route path="/UserUpdate/:id" element={<UserUpdate />} />
                <Route path="/AdminUpdate/:id" element={<AdminUpdate />} />
                <Route path="/AdminUpdate" element={<AdminUpdate />} />
                <Route path="/Footer" element={<Footer />} />
                <Route path="AcessoNegado" element={<AcessoNegado />} />
                <Route path="ViagemCard" element={<ViagemCard />} />
                <Route path="ViagensList" element={<ViagensList />} />
                <Route path="SelecionarAssento" element={<SelecionarAssento />} />
                <Route path="AssentosSimples" element={<AssentosSimples />} />
                <Route path="FormularioReserva" element={<FormularioReserva />} />
                <Route path="/reserva/detalhes/:id_viagem" element={<FormularioReserva />} />
                <Route path="/DeveloperCard" element={<DeveloperCard />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/TrabalheConnosco" element={<TrabalheConnosco />} />
                <Route path="/areainvestidor" element={<Areainvestidor />} />
                <Route path="/SaladeImprensa" element={<SaladeImprensa />} />
                <Route path="/KuendaConfiavel" element={<KuendaConfiavel />} />
                <Route path="/PoliticasPrivacidade" element={<PoliticasPrivacidade />} />
                <Route path="/TermosUso" element={<TermosUso />} />
                <Route path="/AjudaParceiros" element={<AjudaParceiros />} />


                <Route path="MinhasViagens" element={<MinhasViagens />} />
               
                
              
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
          <Route path="Rota" element={<Rota />} />
          <Route path="Muni" element={<MunicipioAutocomplete />} />
          <Route path="tabelarotas" element={<Rotas />} />
          <Route path="viagens" element={<Viagens />} />
          <Route path="AgenciaTable" element={<AgenciaTable />} />
          <Route path="CriarViagem" element={<CriarViagem />} />
          <Route path="CriarAtendente" element={<CadastroAtendente />} />
          <Route path="ViagensListAutorizado" element={<ViagensListAutorizado />} />

         

        </Route>

        
        </Routes>

       
       </BrowserRouter>
      </div>
      
   
  )
}

export default App
