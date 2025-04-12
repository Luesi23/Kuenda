import React from 'react'
import logo from '../svg/LOGO.svg'
import Sidebar from './Sidebar'

const MenuDash = () => {
    return (
        <>
    <div className='menubar mr-4'>
      <div className='logotipo'>
        <div className=''> <img src={logo} alt="LOGOTIPO" /> </div>
      </div>
      <div className='profile my-4'>
        <div className='img-profile'> </div>
          <p className='body-3 mt-1 '> Nome</p>
          <div className='line-side mt-3'></div>
      </div>
      <Sidebar/>
    </div>
   


    </>
  )
}
export default MenuDash