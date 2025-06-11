import React, { useState } from "react";

const AssentosSimples = ({ total, ocupados = [] }) => {
  const [selecionados, setSelecionados] = useState([]);

  const toggleSelecionar = (numero) => {
    if (ocupados.includes(numero)) return;

    setSelecionados((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
  };

  const renderAssentos = () => {
    const linhas = [];

    for (let i = 0; i < total; i += 4) {
      const linha = [];
      for (let j = 0; j < 2; j++) {
        const idx = i + j;
        if (idx < total) {
          const numero = (idx + 1).toString().padStart(2, "0");
          const isSelecionado = selecionados.includes(numero);
          const isOcupado = ocupados.includes(numero);
          const classe = `assento ${isOcupado ? "ocupado" : isSelecionado ? "selecionado" : "livre"}`;
          linha.push(
            <div
              key={numero}
              className={classe}
              onClick={() => toggleSelecionar(numero)}
            >
              {numero}
            </div>
          );
        }
      }

      linha.push(<div key={`corredor-${i}`} className="corredor" />);

      for (let j = 2; j < 4; j++) {
        const idx = i + j;
        if (idx < total) {
          const numero = (idx + 1).toString().padStart(2, "0");
          const isSelecionado = selecionados.includes(numero);
          const isOcupado = ocupados.includes(numero);
          const classe = `assento ${isOcupado ? "ocupado" : isSelecionado ? "selecionado" : "livre"}`;
          linha.push(
            <div
              key={numero}
              className={classe}
              onClick={() => toggleSelecionar(numero)}
            >
              {numero}
            </div>
          );
        }
      }

      linhas.push(
        <div key={`linha-${i}`} className="linha-assentos">
          {linha}
        </div>
      );
    }

    return <div className="grade-assentos">{linhas}</div>;
  };

  return (
    <div className="layout-assentos">
      <h4>Mapa de Assentos ({total} lugares)</h4>
      {renderAssentos()}
      <p>Selecionados: {selecionados.join(", ") || "Nenhum"}</p>
    </div>
  );
};

export default AssentosSimples;
