import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import partidaIcon from "../svg/partidap.svg";
import destinoIcon from "../svg/destinop.svg";
import dataIcon from "../svg/data.svg";
import lupaIcon from "../svg/pesquisap.svg";

const Searchbox = () => {
  const navigate = useNavigate();

  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");

  const clikpesquisar = () => {
    if (!partida || !destino || !data) {
      alert("Preencha todos os campos antes de pesquisar.");
      return;
    }

    // Redirecionar para a rota com filtros na query string
    navigate(`/secondpage?partida=${encodeURIComponent(partida)}&destino=${encodeURIComponent(destino)}&data=${data}`);
  };

  return (
    <div className="container">
      <div className="search-container">
        <div className="input-box">
          <span className="icon-search">
            <img src={partidaIcon} alt="Ícone Partida" />
          </span>
          <input
            type="text"
            placeholder="Partida"
            value={partida}
            onChange={(e) => setPartida(e.target.value)}
          />
        </div>

        <div className="input-box">
          <span className="icon-search">
            <img src={destinoIcon} alt="Ícone Destino" />
          </span>
          <input
            type="text"
            placeholder="Destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>

        <div className="input-box">
          <span className="icon-search">
            <img src={dataIcon} alt="Ícone Data" />
          </span>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
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
