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
          <Outlet/>
          <aside className='flex'>
            <div className='flex container'>
            <MenuDash/>
            <MainDash/>
            </div>
          </aside>
         
      
        </div>
        </div>
    </div>
    </>
  )
}
