import React, { useState, useEffect } from "react";
import axios from "axios";
import ViagemCard from "./ViagemCard";

const ViagensList = () => {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/viagens")
      .then(response => setViagens(response.data))
      .catch(error => console.error("Erro ao buscar viagens:", error));
  }, []);

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