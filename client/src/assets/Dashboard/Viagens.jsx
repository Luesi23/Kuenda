import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Viagens() {
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
        

        <h5>Lista de Empresas</h5> 
        <table className='tabela mt-1'>
            <thead>
                <tr className='header-table'>
                <th>Nome</th>
                <th>Agências</th>
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
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Viagens