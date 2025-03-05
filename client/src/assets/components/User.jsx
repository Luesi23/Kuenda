import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
    const [formData,setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
    })

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        const sendData = async ()=>{
            if (shouldSubmit){
                try{
                    const res = await axios.post("http://localhost:8800/user", formData);
                    console.log(res.data);
                    alert("usuario cadastrado com sucesso")
                    setFormData({
                      nome: "",
                      email: "",
                      senha: "",
                      telefone: "",
                    });
                } catch(err){
                    console.log("o ao cadastrar o usuario", err);
                    alert("Erro ao cadastrar. Verifica os dados");
                }finally {
                    setShouldSubmit(false);
                }
            }
         };
         sendData()
    },[shouldSubmit])
  return (
    <div>
      <h2>Cadastrar Usuário</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShouldSubmit(true); // Ativa o useEffect para fazer o POST
        }}
      >
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
};

export default User