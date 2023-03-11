import React from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { addOrUpdateToCart, removeFromCart } from '../apis/firebase'
import useCart from '../hooks/useCartShoppy'
export interface IProduct {
  id: string
  price: number
  title: string
  image: string
  option: string | number
  quantity: number
}
const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 m-1'
export default function CartItemShoppy({
  product,
  product: { id, price, title, image, option, quantity },
}: {
  uid: string
  product: IProduct
}) {
  const { addOrUpdateItem, removeItem } = useCart()
  const handleMinus = () => {
    if (quantity < 2) return
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 })
  }
  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 })
  const handleDelete = () => removeItem.mutate(id)
  return (
    <li className="flex justify-between my-2 items-center mx-4">
      <img className="w-24 md:w-48 rounded-lg mr-4" src={image} alt={title} />
      <div className="flex flex-1  justify-between">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="title-lg">{option}</p>
          <p className="text=xl font-bold text-brand">{`${price} 원`}</p>
        </div>
        <div className="text-2xl flex items-center">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill
            className={`${ICON_CLASS} `}
            onClick={handleDelete}
          />
        </div>
      </div>
    </li>
  )
}
