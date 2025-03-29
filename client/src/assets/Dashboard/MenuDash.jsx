import React from 'react'
import logo from '../svg/LOGO.svg'

const MenuDash = () => {
    return (
        <>
    <div className='logotipo'>
       <div className=''> <img src={logo} alt="LOGOTIPO" /> </div>
    </div>
    <div className='profile'>
       <div className='img-profile'> </div>
        <p className='body-3 gap-4'> Nome</p>

    </div>
    </>
  )
}
export default MenuDash