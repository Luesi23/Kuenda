import React, { useEffect, useState } from "react";
import axios from "axios";

const ViagensListAutorizado = () => {
  const [viagens, setViagens] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchViagens = async () => {
      try {
        const res = await axios.get("http://localhost:8800/viagens", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("✅ Viagens recebidas:", res.data);
        setViagens(res.data);
      } catch (err) {
        console.error("❌ Erro ao buscar viagens:", err);
      }
    };

    fetchViagens();
  }, []);

  return (
    <div className="viagens-container">
      <h2>Lista de Viagens</h2>
      {viagens.length > 0 ? (
        viagens.map((viagem) => (
          <div key={viagem.id} className="viagem-card-detalhado">
            <h4>{viagem.empresa}</h4>
            <h3>{viagem.municipio_origem} ➝ {viagem.municipio_destino}</h3>
            <p><strong>Data de Partida:</strong> {new Date(viagem.data_partida).toLocaleString("pt-PT")}</p>
            <p><strong>Data de Chegada:</strong> {new Date(viagem.data_chegada).toLocaleString("pt-PT")}</p>
            <p><strong>Duração:</strong> {viagem.duracao_prevista}</p>
            <p><strong>Distância:</strong> {viagem.distancia_km} km</p>
            <p><strong>Preço:</strong> AO {Number(viagem.preco).toFixed(2)}</p>
            <p><strong>Poltronas:</strong> {viagem.total_poltronas}</p>
            <p><strong>Status:</strong> {viagem.status}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma viagem encontrada.</p>
      )}
    </div>
  );
};

export default ViagensListAutorizado;
