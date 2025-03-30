import React from 'react'
import ft from '../svg/profile.svg'
const DashHeader = () => {
  return (
   <>
    <div className='flex-space-between '>
        <div className=''>
        <p> DashBoard</p>
        </div>
          <div className='flex'> 
            <div className='input-search '>
            <input placeholder='Pesquisar'></input>
                </div>
                <div className='Perfil '>
                    <img src={ft} alt="Foto de Perfil" />
                </div>
         </div>
    </div>
    </>
  )
}

export default DashHeader