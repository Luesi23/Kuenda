import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Agencia = () => {
    const [formData, setFormData] = useState({
        nome: "",
        endereco: "",
        empresa_id: "",
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
                        endereco: "",
                        empresa_id: "",
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
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
                <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />
                <input type="number" name="empresa_id" placeholder="ID da empresa" value={formData.empresa_id} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Agencia;