import React from 'react'
import home from '../svg/Home.svg'
import empresa from '../svg/empresa.svg'
import agencia from '../svg/agencia.svg'
import profile from '../svg/profile copy.svg'
import rotas from '../svg/rotas.svg'
import bilhetes from '../svg/bilhetes.svg'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
   <>
   
   <Link to="/DashBoard"> <div className='areas'>
       <div className='icon mr-1'> <img  src= {home} alt="Dashboard" /> </div>
       <p>Dashboard</p>
    </div>
    </Link> 
   
    <Link to="/DashBoard/EmpresaTable">  <div className='areas'>
      <div className='icon mr-1'> <img  src= {empresa} alt="Dashboard" /> </div>
       <p>Empresas</p>
    </div></Link>
    <div className='areas'>
       <div className='icon mr-1'> <img  src= {agencia} alt="Dashboard" /> </div>
       <p>Agência</p>
    </div>
    <Link to="/Dashboard/UserTable"><div className='areas'>
       <div className='icon mr-1'> <img  src= {profile} alt="Dashboard" /> </div>
       <p>Clientes</p>
    </div>
    </Link>
    <div className='areas'>
       <div className='icon mr-1'> <img  src= {rotas} alt="Dashboard" /> </div>
       <p>Rotas</p>
    </div>
    <div className='areas'>
       <div className='icon mr-1'> <img  src= {bilhetes} alt="Dashboard" /> </div>
       <p>Vendas</p>
    </div>
   </>
  )
}

export default Sidebar