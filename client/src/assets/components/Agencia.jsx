import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgenciaTable from './AgenciaTable';

const Agencia = () => {
    const [formData, setFormData] = useState({
        nome: "",
        localizacao: "",
        empresa_id: "",
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
                    const res = await axios.post("http://localhost:8800/agencia", formData);
                    console.log(res.data);
                    alert("Agencia cadastrada com sucesso");
                    setFormData({
                        nome: "",
                        localizacao: "",
                        empresa_id: "",
                        senha: "",
                        email: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar agencia", err);
                    alert("Erro ao Agencia. Verifica os dados");
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
                <input type="text" name="nome" placeholder="Nome" vbalue={formData.nome} onChange={handleChange} required />
                <input type="text" name="localizacao" placeholder="Localização" value={formData.localizacao} onChange={handleChange} required />
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
                <input type="number" name="empresa_id" placeholder="ID da empresa" value={formData.empresa_id} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
            </div>
            <AgenciaTable/>
        </div>
    );
};

export default Agencia;