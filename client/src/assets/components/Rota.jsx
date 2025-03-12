import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Rota = () => {
    const [formData, setFormData] = useState({
        origem: "",
        destino: "",
        municipio: "",
        regiao: "",
    });

    const [shouldSubmit, setShouldSubmit] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const sendData = async () => {
            if (shouldSubmit) {
                try {
                    const res = await axios.post("http://localhost:8800/rota", formData);
                    console.log(res.data);
                    alert("Rota cadastrada com sucesso");
                    setFormData({
                        origem: "",
                        destino: "",
                        municipio: "",
                        regiao: "",
                    });
                } catch (err) {
                    console.error("Erro ao cadastrar a rota", err);
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
            <h2>Cadastrar Rota</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShouldSubmit(true);
                }}
            >
                <input type="text" name="origem" placeholder="Origem" value={formData.origem} onChange={handleChange} required />
                <input type="text" name="destino" placeholder="Destino" value={formData.destino} onChange={handleChange} required />
                <input type="text" name="municipio" placeholder="Município" value={formData.municipio} onChange={handleChange} required />
                <input type="text" name="regiao" placeholder="Região" value={formData.regiao} onChange={handleChange} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Rota;
