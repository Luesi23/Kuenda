import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTableView() {
    const [usertableview, setUserTableView] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/user")
        .then(res => setUserTableView(res.data))
        .catch (err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/user/${id}`)
            setUserTableView(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch(err){
            console.log(err);
        }
    
       
    }
    

  return (
    <div >
        <h5>Lista de Clientes</h5> 
        <table className='tabela mt-1 '>
            <thead>
                <tr className='header-table'>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {
                    usertableview.map((data, i)=>(
                        <tr key={i}>
                            <td className='name-table'>{data.nome}</td>
                            <td className='mail-table'>{data.email}</td>
                            <td className='telefone-table'>{data.telefone}</td>
                           
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTableView