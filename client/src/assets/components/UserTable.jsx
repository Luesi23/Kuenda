import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
                        <tr>
                            <td>{data.nome}</td>
                            <td>{data.email}</td>
                            <td>{data.telefone}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserTable