import React, { useEffect, useState } from "react";
import axios from "axios";

const MinhasViagens = () => {
  const [viagens, setViagens] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchViagens = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:8800/ingressos/minhas", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setViagens(response.data);
      } catch (err) {
        console.error("Erro ao buscar viagens:", err);
        setErro("Erro ao carregar suas viagens.");
      }
    };

    fetchViagens();
  }, []);

  return (
    <div className="minhas-viagens container">
      <h2>Minhas Viagens</h2>
         <div className="minhas-list">
      {erro && <p className="erro">{erro}</p>}

      {!erro && viagens.length === 0 && <p>Você ainda não possui viagens cadastradas.</p>}
       
      {viagens.map((viagem, idx) => (
        <div key={idx} className="viagem-card">
          <p><strong>Referência:</strong> {viagem.referencia}</p>
          <p><strong>Nome do Passageiro:</strong> {viagem.nome_passageiro}</p>
          <p><strong>Assento:</strong> {viagem.numero_assento}</p>
          <p><strong>Telefone:</strong> {viagem.telefone}</p>
          <p><strong>Viagem:</strong> {viagem.municipio_origem} ➝ {viagem.municipio_destino}</p>
          <p><strong>Data de Partida:</strong> {new Date(viagem.data_partida).toLocaleString("pt-PT")}</p>
          <hr />
        </div>
      ))}
      </div>
    </div>
  );
};

export default MinhasViagens;
