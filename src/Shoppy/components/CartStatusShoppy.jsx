import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import useCart from '../hooks/useCartShoppy'

export default function CartStatusShoppy() {
  const {
    cartQuery: { data: product },
  } = useCart()
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
