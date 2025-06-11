import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const SelecionarAssento = () => {
  const { id } = useParams();
  const [viagem, setViagem] = useState(null);
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);
  const [assentosOcupados, setAssentosOcupados] = useState(["01", "02", "03"]); // Exemplo

  useEffect(() => {
    axios.get(`http://localhost:8800/viagens`)
      .then((response) => {
        const viagemEncontrada = response.data.find(v => String(v.id) === id);
        setViagem(viagemEncontrada);
      })
      .catch((error) => console.error("Erro ao buscar viagem:", error));
  }, [id]);

  const toggleAssento = (numero) => {
    if (assentosOcupados.includes(numero)) return;
    setAssentosSelecionados((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
  };

  const preco = viagem ? parseFloat(viagem.preco) : 0;
  const total = preco * assentosSelecionados.length;

  const gerarMapaAssentos = () => {
    const assentos = [];
    for (let i = 1; i <= 52; i++) {
      const numero = i.toString().padStart(2, "0");
      const ocupado = assentosOcupados.includes(numero);
      const selecionado = assentosSelecionados.includes(numero);
      assentos.push(
        <button
          key={numero}
          className={`assento ${ocupado ? "ocupado" : selecionado ? "selecionado" : "livre"}`}
          onClick={() => toggleAssento(numero)}
          disabled={ocupado}
        >
          {numero}
        </button>
      );
    }
    return assentos;
  };

  if (!viagem) return <p>Carregando detalhes da viagem...</p>;

  return (
    <div className="selecionar-assento container">
      <h2>Detalhes da Viagem</h2>

      <div className="resumo-viagem">
        <div className="info-horario">
          <p><strong>Partida:</strong> {new Date(viagem.data_partida).toLocaleString("pt-PT")}</p>
          <p><strong>Chegada:</strong> {new Date(viagem.data_chegada).toLocaleString("pt-PT")}</p>
          <p><strong>Duração:</strong> {viagem.duracao_prevista}</p>
        </div>

        <div className="info-rota">
          <p><strong>Origem:</strong> {viagem.municipio_origem}, {viagem.provincia_origem}</p>
          <p><strong>Destino:</strong> {viagem.municipio_destino}, {viagem.provincia_destino}</p>
        </div>

        <div className="info-operadora">
          <img src={viagem.logotipo_url } alt={viagem.empresa} height={40} />
          <p>Operado por: {viagem.empresa}</p>
        </div>

        <div className="info-extra">
          <p>Agência: {viagem.agencia} ({viagem.localizacao})</p>
          <p>Poltronas disponíveis: {viagem.total_poltronas}</p>
        </div>
      </div>

      <h3>Escolha seu assento</h3>
      <div className="mapa-assentos">
        {gerarMapaAssentos()}
      </div>

      <div className="resumo-compra">
        <p>{assentosSelecionados.length} passageiro(s)</p>
        <p><strong>Total:</strong> AO {total.toFixed(2)}</p>
      </div>

      <button className="botao-continuar">Continuar</button>
    </div>
  );
};

export default SelecionarAssento;
