import React from 'react';
import '../css/sass/Navbar.scss';

import logo from "../svg/LOGO.svg";                    
import loginIcon from "../svg/LOGO.svg";
import ajudaIcon from "../svg/LOGO.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="menu">
        {/* Logo */}
        <div className="logo">
          <a href="#">
            <img src={logo} alt="Kuenda Logo" />
          </a>
        </div>

        {/* Navegação */}
        <nav className="nav-liste">
          <ul>
            <li>
              <a href="#"><img src={loginIcon} alt="" /> Faça login</a>
            </li>
            <li><a href="#">Registar</a></li>
            <li><a href="#">Monitorar</a></li>
            <li>
              <a href="#"><img src={ajudaIcon} alt="" /> Ajuda</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
