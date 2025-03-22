import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserTable() {
    const [usertable, setUserTable] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:8800/user")
        .then(res => setUserTable(res.data))
        .then(res => console.log(err))
    }, [])

  return (
    <div >
        <table>
            <thead>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
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
                                <button className='button_eliminar'>Eliminar</button>
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