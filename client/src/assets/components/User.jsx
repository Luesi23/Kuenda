import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {
    const [user,setuser] = useState([])

    useEffect(()=>{
        const fethcALLUser = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/user")
                setuser(res.data)
            } catch(err){
                console.log(err)
            }
         }
         fethcALLUser()
    },[])
  return (
    <div>
        <h1>Lista de usuarios</h1>
        <div className="user" key={user.id}>
            {user.map(user=>(
                <div className="user">
                    <p>{user.nome}</p>
                    <p>{user.email}</p>
                    <p>{user.senha}</p>
                    <p>{user.telefone}</p>
                </div>    

            ))}
            

            </div>
   </div>
  )
};

export default User