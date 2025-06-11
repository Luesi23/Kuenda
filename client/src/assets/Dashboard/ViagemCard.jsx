import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import realexpressIcon from "../image/transportadoras/realexpress.png";
import maconIcon from "../image/transportadoras/LOGO-MACON.png";
import angorealIcon from "../image/transportadoras/angoreal.png";
import cidralhaIcon from "../image/transportadoras/cidralha.jpeg";
import giraIcon from "../image/transportadoras/gira01.jpg";
import huamboIcon from "../image/transportadoras/huambo000.png";
import Rotas from "./Rotas";
import AssentosSimples from "./AssentosSimples";

const ViagemCard = ({ viagem }) => {
  const navigate = useNavigate();
  const [detalhar, setDetalhar] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detalhar && cardRef.current && !cardRef.current.contains(event.target)) {
        setDetalhar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [detalhar]);

  if (!viagem) return <p>Carregando...</p>;

  const logos = {
    "realexpress.png": realexpressIcon,
    "LOGO-MACON.png": maconIcon,
    "angoreal.png": angorealIcon,
    "cidralha.jpeg": cidralhaIcon,
    "gira01.jpg": giraIcon,
    "huambo000.png": huamboIcon,
  };

  const toggleDetalhes = () => {
    setDetalhar((prev) => !prev);
  };

  return (
    <div className="viagem-card-detalhado" ref={cardRef}>
      <h4>
        {viagem.empresa}
      </h4>

      {/* Filtros 
      {viagem.logotipo_url ? (
        <img
          src={logos[viagem.logotipo_url] }
          alt={`${viagem.empresa}`}
          className="logo-empr"
        />
      ) : (
        <p>Imagem não disponível</p>
      )}
        */}
      <h3>
        {viagem.municipio_origem} ➝ {viagem.municipio_destino}
      </h3>

      {detalhar ? (
        <>
          <p><strong>Data de Partida:</strong> {new Date(viagem.data_partida).toLocaleString("pt-PT")}</p>
          <p><strong>Data de Chegada:</strong> {new Date(viagem.data_chegada).toLocaleString("pt-PT")}</p>
          <p><strong>Duração Prevista:</strong> {viagem.duracao_prevista}</p>
          <p><strong>Distância:</strong> {viagem.distancia_km} km</p>
          <p><strong>Preço:</strong> AO {Number(viagem.preco)?.toFixed(2)}</p>
          <p><strong>Poltronas Disponíveis:</strong> {viagem.total_poltronas}</p>
          <p><strong>Status:</strong> {viagem.status}</p>
         <AssentosSimples
        total={viagem.total_poltronas}
        ocupados={["03", "07"]} // você pode substituir por dados reais do backend
        idViagem={viagem.id}    // 👈 ESSENCIAL
      />

          <button className="botao-continuar" onClick={() => navigate(`/viagem/${viagem.id}`)}>Reservar</button>
        </>
      ) : (
        <>
          <p><strong>Data de Partida:</strong> {new Date(viagem.data_partida).toLocaleString("pt-PT")}</p>
          <p><strong>Preço:</strong> AO {Number(viagem.preco)?.toFixed(2)}</p>
          <button className="botao-selecionar" onClick={toggleDetalhes}>
            Selecionar
          </button>
        </>
      )}
    </div>
  );
};

export default ViagemCard;
