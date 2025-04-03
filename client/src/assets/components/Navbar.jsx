import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-link flex-center mt-3 ml-5'>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/User">Usuário</Link></li>
        <li><Link to="/Admin">Admin</Link></li>
        <li><Link to="/Agencia">Agência</Link></li>
        <li><Link to="/Empresa">Empresa</Link></li>
        <li><Link to="/Data">Data</Link></li>
        <li><Link to="/Rota">Rota</Link></li>
        <li><Link to="/UserTable">Tabela de Usuários</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;