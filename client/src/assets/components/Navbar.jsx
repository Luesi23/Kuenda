import React from 'react';
import { Link } from 'react-router-dom'

import Cadastro from './Cadastro';
import logo from "../svg/LOGO.svg";                    
import profilemainIcon from "../svg/profilemain.svg";
import ajudaIcon from "../svg/ajuda.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-bg">
        <div className="container-navbar">
          {/* Logo */}
          <div className="logo-nav">
            <a href="#">
              <img src={logo} alt="Kuenda Logo" />
            </a>
          </div>

          {/* Navegação */}
          <nav className="nav-liste">
            <ul>
              <li>
               <Link to='/login'> <img src={profilemainIcon} alt="" /> Faça login</Link>
              </li>
              <li><Link to='/cadastro'>Cadastar</Link></li>
              <li><a href="#">Monitorar</a></li>
              <li>
                <a href="#"><img src={ajudaIcon} alt="" /> Ajuda</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
