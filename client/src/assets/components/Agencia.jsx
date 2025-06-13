import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgenciaTable from './AgenciaTable';

const Agencia = () => {
    const [formData, setFormData] = useState({
        nome: "",
        localizacao: "",
        senha: "",
        email: "",
    });

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const sendData = async () => {
            if (shouldSubmit) {
                try {
                    const token = localStorage.getItem("token");

                    const res = await axios.post(
                        "http://localhost:8800/agencia",
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );
                    
                    console.log(res.data);
                    alert("Agência cadastrada com sucesso");

                    setFormData({
                        nome: "",
                        localizacao: "",
                        senha: "",
                        email: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar agência", err);
                    alert("Erro ao cadastrar agência. Verifique os dados.");
                } finally {
                    setShouldSubmit(false);
                }
            }
        };
        sendData();
    }, [shouldSubmit]);

    return (
        <div>
            <h2>Cadastrar Agência</h2>
            <div className='insert-dash-agencia'> 
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShouldSubmit(true);
                    }}
                >
                    <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                    <input type="text" name="localizacao" placeholder="Localização" value={formData.localizacao} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
            <AgenciaTable />
        </div>
    );
};

export default Agencia;
