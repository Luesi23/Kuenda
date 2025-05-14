import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuDash from './MenuDash'
import DashHeader from './DashHeader'
import MainDash from './MainDash'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';

export const DashboardLayout = () => {

  const [mensagem, setMensagem] = useState('');
  const [acessoPermitido, setAcessoPermitido] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

   

    const token = localStorage.getItem("token");

    axios.get("http://localhost:8800/dashboard", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setMensagem(res.data.message);
      setAcessoPermitido(true); // ✅ acesso confirmado
    })
    .catch(err => {
      console.error(err);
      navigate("/AcessoNegado");// ou "/home", dependendo do teu fluxo
      setMensagem("Acesso negado. Apenas administradores.");
    });
  }, []);

  if (!acessoPermitido) {
    return null; // ou <p>Verificando permissões...</p>
  }

  return (
    <>
    <div className='container-dash flex-space-between'>
      <div >
        <div>
          
          <aside className='container-dash flex mt-4'>
            <div className='flex '>
            <MenuDash/>
           <div className='Box-main border p-2 '>
            <MainDash/>
            <Outlet/>
           </div>
            </div>
          </aside>
          
         
      
        </div>
        </div>
    </div>
    </>
  )
}
