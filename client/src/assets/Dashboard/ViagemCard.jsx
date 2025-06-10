import React from "react";
import realexpressIcon from "../image/transportadoras/realexpress.png";
import maconIcon from "../image/transportadoras/LOGO-MACON.png";
import angorealIcon from "../image/transportadoras/angoreal.png";
import cidralhaIcon from "../image/transportadoras/cidralha.jpeg";
import giraIcon from "../image/transportadoras/gira01.jpg";
import huamboIcon from "../image/transportadoras/huambo000.png";

const ViagemCard = ({ viagem }) => {
  if (!viagem) return <p>Carregando...</p>;

  const logos = {
  "realexpress.png": realexpressIcon,
  "LOGO-MACON.png": maconIcon,
  "angoreal.png": angorealIcon,
  "cidralha.jpeg": cidralhaIcon,
  "gira01.jpg": giraIcon,
  "huambo000.png": huamboIcon,
};

  return (
    <div className="viagem-card">
      {viagem.logotipo_url ? (
      <img src={[viagem.logotipo_url]} alt={`Logotipo de ${viagem.empresa}`} className="logo-empr" /> ) : (
        <p>Imagem não disponível</p>
      )}
      <h3>{viagem.municipio_origem} ➝ {viagem.municipio_destino}</h3>
      <p><strong>Data de Partida:</strong> {viagem.data_partida}</p>
      <p><strong>Preço:</strong> AO {Number(viagem.preco)?.toFixed(2)}</p>
      <button className="botao-selecionar">Selecionar</button>
    </div>
  );
};

export default ViagemCard;