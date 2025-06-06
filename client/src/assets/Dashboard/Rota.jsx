import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MunicipioAutocomplete from './MunicipioAutocomplete';

const Rota = () => {

    const [partida, setPartida] = useState(null);
    const [destino, setDestino] = useState(null);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!partida || !destino) {
      alert('Por favor selecione o ponto de partida e o destino.');
      return;
    }

    const rotaData = {
      partida_id: partida.value,
      destino_id: destino.value,
    };

    axios.post("http://localhost:8800/rota", rotaData)
      .then(res => {
        alert('Rota criada com sucesso!');
        setPartida(null);
        setDestino(null);
      })
      .catch(err => {
        console.error('Erro ao criar rota:', err);
        alert('Erro ao criar rota');
      });
  };

  axios.get("http://localhost:8800/rota")

    return (
        <div>
            <h4 className='mb-2'>Criar uma nova Viagen</h4>
           <div className='insert-dash'> 
        <form onSubmit={handleSubmit}>
            <MunicipioAutocomplete 
            placeholder="Ponto de Partida"
            onSelect={setPartida}
            />

            <MunicipioAutocomplete 
            placeholder="Destino"
            onSelect={setDestino}
            />

                <button type="submit">Criar</button>
            </form>
            </div>


        </div>
    );
};

export default Rota;