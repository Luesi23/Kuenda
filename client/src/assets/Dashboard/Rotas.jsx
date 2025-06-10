import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lixo from '../svg/delete.svg'
import update from '../svg/update.svg'


function Rotas() {

   const [rotas, setRotas] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:8800/viagens")
      .then(res => setRotas(res.data))
      .catch(err => console.error("Erro ao carregar rotas:", err));
  }, []);

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/rota/${id}`)
            setRotas(prevRotas => prevRotas.filter(rota => rota.id !== id));
        } catch(err){
            console.log(err);
        }
    
       
    }
    

  return (
  

    <div >
        <h5>Lista de Rotas</h5> 
        <table className='tabela mt-1'>
            <thead>
                <tr className='header-table'>
                <th>Origem</th>
                <th>Destino</th>
                </tr>
            </thead>
            <tbody>
               {rotas.map((rota, idx) => (
            <tr key={rota.id}>
             
              <td className='name-table' >{rota.provincia_origem} - {rota.municipio_origem}</td>
              <td className='mail-table'>{rota.provincia_destino} - {rota.municipio_destino}</td>
               <td className='crud flex'>
                <button className='icon-lixo' onClick={ e => handleDelete(rota.id)}> <img src={lixo} alt="" /> </button>
                  </td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>
  )
}

export default Rotas