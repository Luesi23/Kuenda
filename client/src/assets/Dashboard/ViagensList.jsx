import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ViagemCard from "./ViagemCard";

const ViagensList = () => {
  const [viagens, setViagens] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const partida = params.get("partida");
    const destino = params.get("destino");
    const data = params.get("data");

    const queryString = new URLSearchParams({
      ...(partida && { partida }),
      ...(destino && { destino }),
      ...(data && { data }),
    }).toString();

    const url = `http://localhost:8800/viagens${queryString ? `?${queryString}` : ""}`;

    axios.get(url)
      .then((res) => setViagens(res.data))
      .catch((err) => console.error("Erro ao buscar viagens:", err));
  }, [location.search]);

  return (
    <div className="viagens-container">
      {viagens.length > 0 ? (
        viagens.map((viagem) => <ViagemCard key={viagem.id} viagem={viagem} />)
      ) : (
        <p>Nenhuma viagem encontrada.</p>
      )}
    </div>
  );
};

export default ViagensList;
