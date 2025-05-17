import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

function MunicipioAutocomplete({ placeholder, onSelect }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/municipio")
      .then(res => {
        const municipios = res.data.map(m => ({
          value: m.id,
          label: `${m.provincia} - ${m.municipio}`
        }));
        setOptions(municipios);
      })
      .catch(err => console.error('Erro ao buscar municípios:', err));
  }, []);

  return (
    <Select
      options={options}
      onChange={onSelect}
      placeholder={placeholder}
      isClearable
    />
  );
}

export default MunicipioAutocomplete;
