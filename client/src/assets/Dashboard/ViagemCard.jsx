import React from "react";

const ViagemCard = ({ viagem }) => {
  if (!viagem) return <p>Carregando...</p>;

  return (
    <div className="viagem-card">
      {viagem.logotipo_url ? (
        <img src={viagem.logotipo_url} alt={`Logotipo de ${viagem.empresa}`} className="logo" />
      ) : (
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