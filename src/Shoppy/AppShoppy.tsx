import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderShoppy from './components/HeaderShoppy'

export default function AppShoppy() {
  return (
    <div className="flex w-full justify-center ">
      <div className="w-full max-w-screen-2xl">
        <HeaderShoppy />
        <Outlet />
      </div>
    </div>
  )
}
