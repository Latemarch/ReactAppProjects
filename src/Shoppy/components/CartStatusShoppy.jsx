import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getCart } from '../apis/firebase'
import { useAuthContext } from '../context/ContextShoppy'

export default function CartStatusShoppy() {
  const { user } = useAuthContext()
  const { uid } = user
  const { data: product } = useQuery(['carts'], () => getCart(uid))
  return (
    <div className="relative">
      <AiOutlineShoppingCart className="text-3xl" />
      {product && (
        <p className="flex justify-center items-center text-s w-4 h-4 bg-brand font-bold text-white text-center rounded-full -right-1 -top-1 absolute">
          {product.length}
        </p>
      )}
    </div>
  )
}
