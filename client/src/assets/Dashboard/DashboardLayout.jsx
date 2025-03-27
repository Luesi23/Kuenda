import React from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
  return (
    <>
   <Outlet/>
    <div>DashboardLayout</div>
    </>
  )
}
