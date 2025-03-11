import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
    const [formData, setFormData] = useState({
        dia: "",
        mes: "",
        ano: "",
    });

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const sendData = async () => {
            if (shouldSubmit) {
                try {
                    const res = await axios.post("http://localhost:8800/data", formData);
                    console.log(res.data);
                    alert("Data cadastrada com sucesso");
                    setFormData({
                        dia: "",
                        mes: "",
                        ano: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar data", err);
                    alert("Erro ao cadastrar data. Verifique os dados.");
                } finally {
                    setShouldSubmit(false);
                }
            }
        };
        sendData();
    }, [shouldSubmit]);

    return (
        <div>
            <h2>Cadastrar Data</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
                <input type="number" name="dia" placeholder="Dia" value={formData.dia} onChange={handleChange} required />
                <input type="number" name="mes" placeholder="Mês" value={formData.mes} onChange={handleChange} required />
                <input type="number" name="ano" placeholder="Ano" value={formData.ano} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default DataComponent;