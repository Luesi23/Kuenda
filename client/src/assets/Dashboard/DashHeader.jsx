import React from 'react'
import ft from '../svg/profile.svg'
const DashHeader = () => {
  return (
   <>
    <div className='flex-space-between '>
        <div className='ml-3'>
        <p> DashBoard</p>
        </div>
          <div className='r-side flex mr-3 mt-2'> 
            <div className='input-search '>
             <input placeholder='Pesquisar'></input>
            </div>
            <div className='Perfil ml-2' >
                    <img src={ft} alt="Foto de Perfil" />
             </div>
         </div>
    </div>
    </>
  )
}

export default DashHeader