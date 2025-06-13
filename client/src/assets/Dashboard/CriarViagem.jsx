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
      alert('Só agências podem criar viagens.');
    }
  };

  return (
    <div>
      <h4 className='mb-2'>Criar uma <span className='font-weight-bold'>nova Viagem</span></h4>
      <form onSubmit={handleSubmit}>
        <MunicipioAutocomplete className='mb-3'
          placeholder="Ponto de Partida"
          onSelect={setPartida}
          value={partida}
        />
        <MunicipioAutocomplete
          className='mt-3'
          placeholder="Destino"
          onSelect={setDestino}
          value={destino}
        />
      <div className='form-viagem'>
        <div>
          <p>Distância (km)</p>
          <input placeholder='Ex: 100' name="distancia_km" value={formData.distancia_km} onChange={handleChange} required />
        </div>
        <div>
          <p>Duração Prevista:</p>
          <input type="time" name="duracao_prevista" value={formData.duracao_prevista} onChange={handleChange} required />
        </div>
        <div>
          <p>Data de Partida:</p>
          <input type="datetime-local" name="data_partida" value={formData.data_partida} onChange={handleChange} required />
        </div>
        <div>
          <p>Data de Chegada:</p>
          <input type="datetime-local" name="data_chegada" value={formData.data_chegada} onChange={handleChange} />
        </div>
        <div>
          <p>Preço:</p>
          <input placeholder='Ex: 5000' type="number" name="preco" value={formData.preco} onChange={handleChange} required />
        </div>
        <div>
          <p>Total de Poltronas:</p>
          <input placeholder='Ex: 42' type="number" name="total_poltronas" value={formData.total_poltronas} onChange={handleChange} required />
        </div>
        <div>
          <p>Status:</p>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="disponível">Disponível</option>
            <option value="em andamento">Em andamento</option>
            <option value="concluída">Concluída</option>
            
          </select>
        </div>
      </div>
        <button className='button-viagem' type="submit">Criar Viagem</button>
      </form>
    </div>
  );
};

export default CriarViagem;
