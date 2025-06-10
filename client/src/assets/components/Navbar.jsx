import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import logo from "../svg/LOGO.svg";                    
import profilemainIcon from "../svg/profilemain.svg";
import ajudaIcon from "../svg/ajuda.svg";

const Navbar = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = localStorage.getItem("user");
    if (dados) {
      setUsuario(JSON.parse(dados));
    }
  }, [])

  useEffect(() => {
    const handleClickFora = (event) => {
      if (!event.target.closest(".usuario-menu")) {
        setMostrarDropdown(false);
      }
      if (!event.target.closest(".menu-toggle") && !event.target.closest(".mobile-menu")) {
        setMobileMenuActive(false);
      }
    };
    document.addEventListener("click", handleClickFora);
    return () => document.removeEventListener("click", handleClickFora);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUsuario(null);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <header className="navbar">
      <div className="navbar-bg">
        <div className="container-navbar">

           {/* Grupo hamburger + logo */}
           <div className="navbar-left">
          {/* Menu Hamburger (mobile) */}
          <div className="menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Logo */}
          <div className="logo-nav">
            <Link to="/">  
              <img src={logo} alt="Kuenda Logo" />
            </Link>
          </div>
        </div>

          {/* Navegação Desktop */}
          <nav className="nav-liste">
            <ul>
              {usuario ? (
                <>
                  <li className="usuario-menu">
                    <button className="btn-nome-usuario" onClick={() => setMostrarDropdown(!mostrarDropdown)}>
                      <img src={profilemainIcon} alt="" /> Olá, {usuario.nome}
                    </button>

                    {mostrarDropdown && (
                      <ul className="dropdown-usuario">
                        <li>
                          <button onClick={handleLogout}>Terminar sessão</button>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to='/login'><img src={profilemainIcon} alt="" /> Faça login</Link>
                  </li>
                  <li><Link to='/cadastro'>Cadastar</Link></li>
                </>
              )}
              <li>
                <Link to="/monitorizacao">Monitorar</Link>
              </li>
              <li>
                <a href="#"><img src={ajudaIcon} alt="" /> Ajuda</a>
              </li>
            </ul>
          </nav>

          {/* Navegação Mobile */}
          <nav className={`mobile-menu ${mobileMenuActive ? 'active' : ''}`}>
            <ul>
              {usuario ? (
                <>
                  <li className="usuario-menu">
                    <button className="btn-nome-usuario" onClick={() => setMostrarDropdown(!mostrarDropdown)}>
                      <img src={profilemainIcon} alt="" /> Olá, {usuario.nome}
                    </button>

                    {mostrarDropdown && (
                      <ul className="dropdown-usuario">
                        <li>
                          <button onClick={handleLogout}>Terminar sessão</button>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to='/login' onClick={() => setMobileMenuActive(false)}>
                      <img src={profilemainIcon} alt="" /> Faça login
                    </Link>
                  </li>
                  <li>
                    <Link to='/cadastro' onClick={() => setMobileMenuActive(false)}>Cadastar</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/monitorizacao" onClick={() => setMobileMenuActive(false)}>Monitorar</Link>
              </li>
              <li>
                <a href="#" onClick={() => setMobileMenuActive(false)}>
                  <img src={ajudaIcon} alt="" /> Ajuda
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;