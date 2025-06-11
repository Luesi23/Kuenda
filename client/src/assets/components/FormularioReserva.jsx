import React, { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FormularioReserva = () => {
  const { id_viagem } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const assentos = searchParams.get("assentos")?.split(",") || [];

  const [formData, setFormData] = useState(() => {
    const initialState = {};
    assentos.forEach((assento) => {
      initialState[assento] = {
        nome_passageiro: "",
        documento_identidade: "",
        telefone: ""
      };
    });
    return initialState;
  });

  const [reservaConcluida, setReservaConcluida] = useState(null);

  const handleChange = (assento, campo, valor) => {
    setFormData((prev) => ({
      ...prev,
      [assento]: {
        ...prev[assento],
        [campo]: valor
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const reservas = await Promise.all(
        assentos.map((numero_assento) =>
          axios.post(
            "http://localhost:8800/ingressos",
            {
              id_viagem,
              numero_assento,
              ...formData[numero_assento],
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
        )
      );

      const ref = `INGR-${Date.now()}`;
      setReservaConcluida({ referencia: ref, assentos });
    } catch (err) {
      alert("Erro ao reservar assentos. Tente novamente.");
    }
  };

  return (
    <div className="formulario-reserva container">
      <h2>Preencher Dados da Reserva</h2>

      {reservaConcluida ? (
        <div className="resumo-reserva">
          <h3>Reserva Confirmada!</h3>
          <p>Referência: <strong>{reservaConcluida.referencia}</strong></p>
          <p>Assentos reservados: {reservaConcluida.assentos.join(", ")}</p>
          <button onClick={() => navigate("/")}>Voltar ao Início</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form-reserva">
          {assentos.map((numero) => (
            <div key={numero} className="bloco-passageiro">
              <h4>Passageiro do Assento {numero}</h4>
              <label>Nome:
                <input
                  type="text"
                  value={formData[numero].nome_passageiro}
                  onChange={(e) => handleChange(numero, "nome_passageiro", e.target.value)}
                  required
                />
              </label>

              <label>Documento:
                <input
                  type="text"
                  value={formData[numero].documento_identidade}
                  onChange={(e) => handleChange(numero, "documento_identidade", e.target.value)}
                />
              </label>

              <label>Telefone:
                <input
                  type="text"
                  value={formData[numero].telefone}
                  onChange={(e) => handleChange(numero, "telefone", e.target.value)}
                />
              </label>
              <hr />
            </div>
          ))}

          <button type="submit">Confirmar Reserva</button>
        </form>
      )}
    </div>
  );
};

export default FormularioReserva;
