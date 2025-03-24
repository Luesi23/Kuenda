import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const AdminUpdate = () => {
    const [formData,setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
    })
    const {id} = useParams();
    const navigate = useNavigate();

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      const fetchAdmin = async () => {
          try {
              const res = await axios.get(`http://localhost:8800/admin/${id}`);
              setFormData(res.data);
          } catch (err) {
              console.log("Erro ao buscar usuário:", err);
          }
      };
      fetchAdmin();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarregar a página
    try {
        await axios.put(`http://localhost:8800/adminupdate/${id}`, formData);
        alert("Administrador atualizado com sucesso!");
        navigate("/AdminTable"); // ✅ Redireciona para a tabela de administradores
    } catch (err) {
        console.log("Erro ao atualizar o administrador:", err);
        alert("Erro ao atualizar. Verifique os dados.");
    }
};
  return (
    <div>
      <h2>Atualizar Usuário</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShouldSubmit(true); // Ativa o useEffect para fazer o POST
        }}
      >
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
        <button type="submit">Atulaizar</button>
      </form>
    </div>
  )
};

export default AdminUpdate