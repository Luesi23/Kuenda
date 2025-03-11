import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const sendData = async () => {
            if (shouldSubmit) {
                try {
                    const res = await axios.post("http://localhost:8800/admin", formData);
                    console.log(res.data);
                    alert("Administrador cadastrado com sucesso");
                    setFormData({
                        nome: "",
                        email: "",
                        senha: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar o administrador", err);
                    alert("Erro ao cadastrar. Verifica os dados");
                } finally {
                    setShouldSubmit(false);
                }
            }
        };
        sendData();
    }, [shouldSubmit]);

    return (
        <div>
            <h2>Cadastrar Administrador</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
                <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Admin;