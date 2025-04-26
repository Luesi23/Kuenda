import React from 'react';

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
                <a href="#"><img src={profilemainIcon} alt="" /> Faça login</a>
              </li>
              <li><a href="#">Registar</a></li>
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
