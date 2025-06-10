import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lixo from '../svg/delete.svg'
import update from '../svg/update.svg'
import Empresa from './Empresa'


function AgenciaTable() {
    const [agenciatable, setAgenciaTable] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/agencia")
        .then(res => setAgenciaTable(res.data))
        .catch (err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/empresa/${id}`)
            setAgenciaTable(prevagencia => prevagencia.filter(agencia => agencia.id !== id));
        } catch(err){
            console.log(err);
        }
    
       
    }
    

  return (
    <div >
        <div className='mb-3'>
        </div>

        <h5>Lista de Agencia</h5> 
        <table className='tabela mt-1'>
            <thead>
                <tr className='header-table'>
                <th>Nome</th>
                <th>Email</th>
                <th>Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    agenciatable.map((data, i)=>(
                        <tr key={i}>
                            <td className='name-table'>{data.nome}</td>
                            <td className='mail-table'>{data.email}</td>
                            <td className='telefone-table'>{data.id}</td>
                            <td className='crud flex'>
                            <Link to={`/UserUpdate/${data.id}`}> <button className='icon mx-1'> <img src={update} alt="" /> </button></Link>
                                <button className='icon-lixo' onClick={ e => handleDelete(data.id)}> <img src={lixo} alt="" /> </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AgenciaTable