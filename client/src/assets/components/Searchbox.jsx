import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import partidaIcon from "../svg/partidap.svg";
import destinoIcon from "../svg/destinop.svg";
import dataIcon from "../svg/data.svg";
import lupaIcon from "../svg/pesquisap.svg";

const Searchbox = () => {
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [partida, setPartida] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState(getCurrentDate());
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showErrorToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const clikpesquisar = () => {
    if (!partida.trim() && !destino.trim() && !data) {
      showErrorToast("Por favor, preencha todos os campos para pesquisar");
      return;
    }
    
    if (!partida.trim()) {
      showErrorToast("Por favor, informe a cidade de partida");
      return;
    }
    
    if (!destino.trim()) {
      showErrorToast("Por favor, informe a cidade de destino");
      return;
    }
    
    if (!data) {
      showErrorToast("Por favor, selecione uma data válida");
      return;
    }
    
    if (partida.trim().toLowerCase() === destino.trim().toLowerCase()) {
      showErrorToast("A cidade de partida e destino não podem ser iguais");
      return;
    }
    
    navigate(`/secondpage?partida=${encodeURIComponent(partida)}&destino=${encodeURIComponent(destino)}&data=${data}`);
  };

  return (
    <div className="container">
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          {toastMessage}
        </div>
      )}

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
            min={getCurrentDate()}
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