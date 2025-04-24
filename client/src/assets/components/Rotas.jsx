import React from "react"
import { useEffect, useState } from "react";

const Rotas = () => {
  const [dados, setDados] = useState({});
  const [pesquisa, setPesquisa] = useState("");
  const [filtrados, setFiltrados] = useState([]);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");

  // Buscar dados do backend
  useEffect(() => {
    fetch("http://localhost:8800/provincia-municipios")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  // Filtrar conforme o texto digitado
  useEffect(() => {
    if (!pesquisa.trim()) {
      setFiltrados([]);
      return;
    }

    const resultados = [];

    Object.entries(dados).forEach(([provincia, municipios]) => {
      if (provincia.toLowerCase().includes(pesquisa.toLowerCase())) {
        resultados.push({ tipo: "provincia", nome: provincia });
      }

      municipios.forEach((municipio) => {
        if (municipio.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
          resultados.push({ tipo: "municipio", nome: municipio.nome, provincia });
        }
      });
    });

    setFiltrados(resultados);
  }, [pesquisa, dados]);

  // Quando o usuário clicar numa opção, ela será usada nos selects
  const handleSelecionar = (item) => {
    const local = item.tipo === "provincia" ? item.nome : `${item.nome} (${item.provincia})`;

    // Preencher origem se estiver vazio, se não preencher destino
    if (!origem) {
      setOrigem(local);
    } else if (!destino) {
      setDestino(local);
    }

    setPesquisa("");
    setFiltrados([]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar província ou município..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />

      {pesquisa && (
        <ul>
          {filtrados.length > 0 ? (
            filtrados.map((item, index) => (
              <li
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => handleSelecionar(item)}
              >
                {item.tipo === "provincia" ? (
                  <>Província: {item.nome}</>
                ) : (
                  <>Município: {item.nome} ({item.provincia})</>
                )}
              </li>
            ))
          ) : (
            <li>Nenhum resultado encontrado.</li>
          )}
        </ul>
      )}

      <div style={{ marginTop: "20px" }}>
        <label>
          Origem:
          <select value={origem} onChange={(e) => setOrigem(e.target.value)}>
            <option value="">Selecionar origem</option>
            {Object.entries(dados).map(([provincia, municipios]) =>
              municipios.map((municipio) => (
                <option key={`${provincia}-${municipio.nome}`}>
                  {municipio.nome} ({provincia})
                </option>
              ))
            )}
          </select>
        </label>

        <br />

        <label>
          Destino:
          <select value={destino} onChange={(e) => setDestino(e.target.value)}>
            <option value="">Selecionar destino</option>
            {Object.entries(dados).map(([provincia, municipios]) =>
              municipios.map((municipio) => (
                <option key={`${provincia}-${municipio.nome}`}>
                  {municipio.nome} ({provincia})
                </option>
              ))
            )}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Rotas;
