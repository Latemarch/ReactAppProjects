import React from 'react'
import { BsPen, BsShop } from 'react-icons/bs'

export default function HeaderShoppy() {
  return (
    <div className="bg-gray-400 flex justify-between items-center border-b py-3 ">
      <div className="flex items-center">
        <BsShop className="text-4xl mr-2" />
        <h1 className="text-4xl font-bold">Shoppy</h1>
      </div>
      <div className="flex items-center font-bold">
        <p>Products</p>
        <p>Charts</p>
        <BsPen />
        <button>Login</button>
        <p>Home</p>
      </div>
    </div>
  )
}
