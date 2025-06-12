import React from "react";
import { useNavigate } from 'react-router-dom';

//import icons for .search-container
import partidaIcon from "../svg/partidap.svg";
import destinoIcon from "../svg/destinop.svg";
import dataIcon from "../svg/data.svg";
import lupaIcon from "../svg/pesquisap.svg";


 

const Searchbox = () => {

  const navigate = useNavigate();

    // Função para obter a data atual no formato YYYY-MM-DD
    const getCurrentDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses são 0-indexed
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

  const clikpesquisar = () => {
    navigate('../secondpage');
  };

  return (
    <div className="container">
      {/* Bloco da barra de pesquisa */}
      <div className="search-container">
        <div className="input-box">
          <span className="icon-search">
            <img src={partidaIcon} alt="Ícone Partida" />
          </span>
          <input type="text" placeholder="Partida" />
        </div>

        <div className="input-box">
          <span className="icon-search">
            <img src={destinoIcon} alt="Ícone Destino" />
          </span>
          <input type="text" placeholder="Destino" />
        </div>

       {/* Input Data (dinâmico) */}
       <div className="input-box">
          <span className="icon-search">
            <img src={dataIcon} alt="Ícone Data" />
          </span>
          <input 
            type="date" 
            defaultValue={getCurrentDate()} // Data atual aqui
          />
        </div>

        
        <button className="search-button" onClick={clikpesquisar}>
          <span>
            <img src={lupaIcon} alt="Ícone Pesquisar" />
          </span>
          Encontrar
        </button>
      </div>
    </div>
  );
};

export default Searchbox;
