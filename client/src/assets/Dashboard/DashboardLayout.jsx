import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuDash from './MenuDash'
export const DashboardLayout = () => {
  return (
    <>
    <div>
     <Outlet/>
     <MenuDash/>
    </div>
    </>
  )
}
