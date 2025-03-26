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
      const fetchUser = async () => {
          try {
              const res = await axios.get(`http://localhost:8800/admin/${id}`);
              setFormData(res.data);
          } catch (err) {
              console.log("Erro ao buscar usuário:", err);
          }
      };
      fetchUser();
  }, [id]);

    useEffect(()=>{
        const sendData = async ()=>{
            if (shouldSubmit){
                try{
                    const res = await axios.put(`http://localhost:8800/adminupdate/${id}`, formData);
                    console.log(res.data);
                    alert("Admin atualizado com sucesso")
                    navigate("/AdminTable");                        
                } catch(err){
                    console.log("o ao atualizar o Admin", err);
                    alert("Erro aoAtualizar. Verifica os dados");
                }finally {
                    setShouldSubmit(false);
                }
            }
         };
         sendData()
    },[shouldSubmit])
  return (
    <div>
      <h2>Atualizar Admin</h2>
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