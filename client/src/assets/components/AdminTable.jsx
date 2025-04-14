import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminTable() {
    const [admintable, setAdminTable] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/admin")
        .then(res => setAdminTable(res.data))
        .catch (err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/admin/${id}`)
            setAdminTable(prevadmins => prevadmins.filter(admin => admin.id !== id));
        } catch(err){
            console.log(err);
        }
    
       
    }
    

  return (
    <div >
        <table>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {
                    admintable.map((data, i)=>(
                        <tr key={i}>
                            <td>{data.nome}</td>
                            <td>{data.email}</td>
                            <td>
                            <Link to={`/AdminUpdate/${data.id}`}> <button>Atualizar</button></Link>
                                <button className='button_eliminar' onClick={ e => handleDelete(data.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AdminTable
