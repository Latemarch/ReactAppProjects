import { BsPen, BsShop } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { IContext, useAuthContext } from '../context/ContextShoppy'
import UserShoppy from './UserShoppy'

export default function HeaderShoppy() {
  const { user, login, logout } = useAuthContext() as IContext
  return (
    <header className="flex justify-between items-center py-3 p-2 ">
      <Link to="/shoppy" className="flex items-center text-brand ">
        <BsShop className="text-4xl mr-2" />
        <h1 className="text-4xl font-bold">Shoppy</h1>
      </Link>
      <nav className="flex items-center font-bold gap-4">
        {user && user.isAdmin && (
          <Link to="products/new">
            <BsPen />
          </Link>
        )}
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
