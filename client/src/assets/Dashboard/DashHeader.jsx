import React from 'react'
import ft from '../svg/profile.svg'
const DashHeader = () => {
  return (
   <>
    <div className='flex-space-between '>
        <div className=''>
        <p> DashBoard</p>
        </div>
          <div className='r-side flex mr-3 mt-2'> 
             <input className='input-search pl-1' placeholder='Pesquisar'></input>
            <div className='Perfil ml-1' >
                    <img src={ft} alt="Foto de Perfil" />
             </div>
         </div>
    </div>
    </>
  )
}

export default DashHeader