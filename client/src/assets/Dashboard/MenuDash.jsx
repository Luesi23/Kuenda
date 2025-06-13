import React, { useEffect, useState } from 'react';
import logo from '../svg/LOGO.svg';
import person from '../svg/personwhite.svg';
import Sidebar from './Sidebar';

const MenuDash = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setNomeUsuario(user.nome || "Usuário");

      const tipoTraduzido = {
        admin: "Administrador",
        empresa: "Empresa",
        agencia: "Agência",
        atendente: "Atendente",
        usuario: "Passageiro"
      };

      setTipoUsuario(tipoTraduzido[user.tipo] || "Conta");
    }
  }, []);

  return (
    <>
      <div className='menubar mr-4'>
        <div className='logotipo'>
          <div><img src={logo} alt="LOGOTIPO" /></div>
        </div>

        <div className='profile my-4'>
          <div className='img-profile'>
            <img src={person} alt="Perfil" />
          </div>
          <p className='body-3 mt-1'>{nomeUsuario}</p>
          <p className='tipo-usuario '>{tipoUsuario}</p>
          <div className='line-side mt-3'></div>
        </div>

        <Sidebar />
      </div>
    </>
  );
};

export default MenuDash;
