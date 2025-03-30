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
      <div className='profile'>
        <div className='img-profile'> </div>
          <p className='body-3 '> Nome</p>
      </div>
      <Sidebar/>
    </div>
   


    </>
  )
}
export default MenuDash