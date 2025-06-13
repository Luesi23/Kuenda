import React, { useState } from "react";
import axios from "axios";

const CadastroAtendente = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:8800/atendente", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMensagem("✅ Atendente cadastrado com sucesso!");
      setFormData({ nome: "", email: "", senha: "" });
    } catch (err) {
      console.error(err);
      setMensagem("❌ Erro ao cadastrar atendente.");
    }
  };

  return (
    <div className="cadastro-atendente container">
      <h2>Cadastrar Atendente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do atendente"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email do atendente"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroAtendente;
