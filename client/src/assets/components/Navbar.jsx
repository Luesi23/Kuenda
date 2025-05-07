import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'

import logo from "../svg/LOGO.svg";                    
import profilemainIcon from "../svg/profilemain.svg";
import ajudaIcon from "../svg/ajuda.svg";

const Navbar = () => {

  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dados= localStorage.getItem("user");
    if (dados) {
      setUsuario(JSON.parse(dados));
    }

  }, [])

  const handleLogout = () => {
    localStorage.clear();
    setUsuario(null);
    navigate("/");
  };

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
            {usuario ? (
                <>
                  <li>
                    <img src={profilemainIcon} alt="" /> Olá, {usuario.nome}
                  </li>
                  <li>
                    <button onClick={handleLogout} >
                      Sair
                    </button>
                  </li>
                </>
              ) : (
                <>
              <li>
               <Link to='/login'> <img src={profilemainIcon} alt="" /> Faça login</Link>
              </li>
              <li><Link to='/cadastro'>Cadastar</Link></li>
              </>
              )}
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
