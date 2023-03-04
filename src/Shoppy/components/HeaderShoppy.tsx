import React, { useEffect, useState } from 'react'
import { BsPen, BsShop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { login, logout, onUserStateChange } from '../apis/firebase'
import UserShoppy from './UserShoppy'

export default function HeaderShoppy() {
  const [user, setUser] = useState<any>(null)
  useEffect(() => {
    onUserStateChange(setUser)
  }, [])

  return (
    <header className="bg-pink-100 flex justify-between items-center py-3 p-2 ">
      <Link to="/shoppy" className="flex items-center text-amber-600 ">
        <BsShop className="text-4xl mr-2" />
        <h1 className="text-4xl font-bold">Shoppy</h1>
      </Link>
      <nav className="flex items-center font-bold gap-4">
        <Link to="products/new">
          <BsPen />
        </Link>
        <Link to="products">Products</Link>
        <Link to="carts">Carts</Link>
        {!user && <button onClick={login}>Login</button>}
        {user && <UserShoppy user={user} />}
        {user && <button onClick={logout}>Logout</button>}
        <p>Home</p>
      </nav>
    </header>
  )
}
