import React, { useState } from 'react';
import axios from 'axios';
import MunicipioAutocomplete from './MunicipioAutocomplete';

const CriarViagem = () => {
  const [partida, setPartida] = useState(null);
  const [destino, setDestino] = useState(null);

  const [formData, setFormData] = useState({
    distancia_km: '',
    duracao_prevista: '',
    data_partida: '',
    data_chegada: '',
    preco: '',
    total_poltronas: '',
    status: 'disponível',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!partida || !destino) {
      alert('Por favor selecione o ponto de partida e o destino.');
      return;
    }

    const viagemData = {
      ...formData,
      id_origem: partida.value,
      id_destino: destino.value,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:8800/viagens", viagemData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Viagem criada com sucesso!');
      // Limpar campos
      setPartida(null);
      setDestino(null);
      setFormData({
        distancia_km: '',
        duracao_prevista: '',
        data_partida: '',
        data_chegada: '',
        preco: '',
        total_poltronas: '',
        status: 'disponível',
      });
    } catch (err) {
      console.error('Erro ao criar viagem:', err);
      alert('Erro ao criar viagem');
    }
  };

  return (
    <div>
      <h4>Criar uma nova Viagem</h4>
      <form onSubmit={handleSubmit}>
        <MunicipioAutocomplete
          placeholder="Ponto de Partida"
          onSelect={setPartida}
          value={partida}
        />
        <MunicipioAutocomplete
          placeholder="Destino"
          onSelect={setDestino}
          value={destino}
        />

        <div>
          <label>Distância (km):</label>
          <input name="distancia_km" value={formData.distancia_km} onChange={handleChange} required />
        </div>
        <div>
          <label>Duração Prevista:</label>
          <input type="time" name="duracao_prevista" value={formData.duracao_prevista} onChange={handleChange} required />
        </div>
        <div>
          <label>Data de Partida:</label>
          <input type="datetime-local" name="data_partida" value={formData.data_partida} onChange={handleChange} required />
        </div>
        <div>
          <label>Data de Chegada:</label>
          <input type="datetime-local" name="data_chegada" value={formData.data_chegada} onChange={handleChange} />
        </div>
        <div>
          <label>Preço:</label>
          <input type="number" name="preco" value={formData.preco} onChange={handleChange} required />
        </div>
        <div>
          <label>Total de Poltronas:</label>
          <input type="number" name="total_poltronas" value={formData.total_poltronas} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="disponível">Disponível</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluída">Concluída</option>
            <option value="cancelada">Cancelada</option>
          </select>
        </div>

        <button type="submit">Criar Viagem</button>
      </form>
    </div>
  );
};

export default CriarViagem;
