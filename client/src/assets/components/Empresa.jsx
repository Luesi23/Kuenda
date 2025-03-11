import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Empresa = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        admin_id: "",
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
                        descricao: "",
                        admin_id: "",
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
            <h2>Cadastrar Empresa</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
                <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
                <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
                <input type="number" name="admin_id" placeholder="ID do Administrador" value={formData.admin_id} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Empresa;