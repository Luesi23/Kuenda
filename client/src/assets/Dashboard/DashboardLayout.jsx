import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuDash from './MenuDash'
import DashHeader from './DashHeader'
import MainDash from './MainDash'
export const DashboardLayout = () => {
  return (
    <>
    <div>
      <div className='container flex-space-between'>
        <div>
          
          <aside className='flex'>
            <div className='flex container '>
            <MenuDash/>
           <div className='Box-main border p-2'>
            <MainDash/>
            <Outlet/>
           </div>
            </div>
          </aside>
          
         
      
        </div>
        </div>
    </div>
    </>
  )
}
