import axios from 'axios'
import e from 'cors'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTable() {
    const [usertable, setUserTable] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/user")
        .then(res => setUserTable(res.data))
        .catch (err => console.log(err))
    }, [])

    
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/user/${id}`)
            setUserTable(prevUsers => prevUsers.filter(user => user.id !== id));
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
                    usertable.map((data, i)=>(
                        <tr key={i}>
                            <td>{data.nome}</td>
                            <td>{data.email}</td>
                            <td>{data.telefone}</td>
                            <td>
                            <Link to={`/UserUpdate/${data.id}`}> <button>Atualizar</button></Link>
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

export default UserTable