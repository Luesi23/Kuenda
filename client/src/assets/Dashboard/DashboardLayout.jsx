import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuDash from './MenuDash'
import DashHeader from './DashHeader'
import MainDash from './MainDash'
export const DashboardLayout = () => {
  return (
    <>
    <div className='container-dash flex-space-between'>
      <div >
        <div>
          
          <aside className='container-dash flex'>
            <div className='flex '>
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
