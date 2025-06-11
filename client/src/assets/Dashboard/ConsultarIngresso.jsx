import React, { useEffect, useState } from "react";
import axios from "axios";

const ConsultarIngresso = () => {
  const [referencia, setReferencia] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarIngresso = () => {
  if (!referencia.trim()) {
    setErro("Insira uma referência válida.");
    return;
  }

  const refLimpa = referencia.trim();
  console.log("🔎 Referência enviada:", refLimpa);

  setErro(null);
  setDados(null);

  axios.get(`http://localhost:8800/ingresso/referencia/${refLimpa}`)
    .then(res => setDados(res.data))
    .catch(err => {
      console.error("❌ Erro na requisição:", err.response?.data || err.message);
      setErro("Referência não encontrada ou erro no servidor.");
    });
};


  return (
    <div className="consulta-ingresso container">
      <h2>Verificar Ingresso</h2>
      <p>Área exclusiva para atendentes: digite a referência fornecida pelo passageiro.</p>

      <div className="form-verificacao">
        <input
          type="text"
          value={referencia}
          onChange={(e) => setReferencia(e.target.value)}
          placeholder="Ex: INGR-1749661681872"
        />
        <button onClick={buscarIngresso}>Buscar</button>
      </div>

      {erro && <p className="erro">{erro}</p>}
      {!erro && dados && (
        <div className="resultado-ingresso">
          <h3>Ingresso Encontrado:</h3>
          {dados.map((ingresso, idx) => (
            <div key={idx} className="ingresso-info">
              <p><strong>Referência:</strong> {ingresso.referencia}</p>
              <p><strong>Nome do Passageiro:</strong> {ingresso.nome_passageiro}</p>
              <p><strong>Assento:</strong> {ingresso.numero_assento}</p>
              <p><strong>Documento:</strong> {ingresso.documento_identidade}</p>
              <p><strong>Telefone:</strong> {ingresso.telefone}</p>
              <p><strong>Viagem:</strong> {ingresso.municipio_origem} ➝ {ingresso.municipio_destino}</p>
              <p><strong>Data de Partida:</strong> {new Date(ingresso.data_partida).toLocaleString("pt-PT")}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultarIngresso;
