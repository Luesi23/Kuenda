import React from "react";

//import icons for .search-container
import partidaIcon from "../svg/partidap.svg";
import destinoIcon from "../svg/destinop.svg";
import dataIcon from "../svg/data.svg";
import lupaIcon from "../svg/pesquisap.svg";

const Searchbox = () => {
  return (
    <div className="container">
      {/* Bloco da barra de pesquisa */}
      <div className="search-container">
        <div className="input-box">
          <span className="icon">
            <img src={partidaIcon} alt="Ícone Partida" />
          </span>
          <input type="text" placeholder="Partida" />
        </div>

        <div className="input-box">
          <span className="icon">
            <img src={destinoIcon} alt="Ícone Destino" />
          </span>
          <input type="text" placeholder="Destino" />
        </div>

        <div className="input-box">
          <span className="icon">
            <img src={dataIcon} alt="Ícone Data" />
          </span>
          <input type="date" defaultValue="2025-01-01" />
        </div>

        <button className="search-button">
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
