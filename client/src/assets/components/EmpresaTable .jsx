import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lixo from '../svg/delete.svg'
import update from '../svg/update.svg'
import Empresa from './Empresa'


function EmpresaTable() {
    const [empresatable, setEmpresaTable] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/empresa")
        .then(res => setEmpresaTable(res.data))
        .catch (err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/empresa/${id}`)
            setempresaTable(prevempresas => prevempresas.filter(empresa => empresa.id !== id));
        } catch(err){
            console.log(err);
        }
    
       
    }
    

  return (
    <div >
        <div className='mb-3'>
        <Empresa/>
        </div>

        <h5>Lista de Empresas</h5> 
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
                    empresatable.map((data, i)=>(
                        <tr key={i}>
                            <td className='name-table'>{data.nome}</td>
                            <td className='mail-table'>{data.descricao}</td>
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

export default EmpresaTable