import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Empresa = () => {
    const [formData, setFormData] = useState({
         nome: "",
        email: "",
        senha: "",
        telefone: "",
    });

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const sendData = async () => {
            if (shouldSubmit) {
                try {
                    const res = await axios.post("http://localhost:8800/empresa", formData);
                    console.log(res.data);
                    alert("Empresa cadastrada com sucesso");
                    setFormData({
                         nome: "",
                      email: "",
                      senha: "",
                      telefone: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar a empresa", err);
                    alert("Erro ao cadastrar. Verifique os dados");
                } finally {
                    setShouldSubmit(false);
                }
            }
        };
        sendData();
    }, [shouldSubmit]);

    return (
        <div>
            <h4>Cadastrar Empresa</h4>
           <div className='insert-dash'> <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
        <input type="text" name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
            </div>
        </div>
    );
};

export default Empresa;