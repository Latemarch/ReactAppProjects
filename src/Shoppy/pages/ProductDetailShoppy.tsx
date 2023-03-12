import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import useCart from '../hooks/useCartShoppy'
interface IProduct {
  id: string
  title: string
  image: string
  price: number
  options: Array<number | string>
}
export default function ProductDetail() {
  const { addOrUpdateItem } = useCart()
  const {
    state: { product },
  } = useLocation()
  const { id, title, price, image, options } = product as IProduct

  const [selected, setSelected] = useState<number | string>(
    options && options[0],
  )
  const handleClick = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 }
    addOrUpdateItem.mutate(product)
  }

  return (
    <section className="flex flex-col md:flex-row p-4">
      <img className="w-full px-2 basis-7/12" src={image} alt={title} />
      <div className="w-full basis-5/12 flex flex-col p-4 ">
        <h2 className="text-3xl font-bold py-2  ">{title}</h2>
        <p className="text-2xl font-bold py-2 border-b">{price}</p>
        <p className="py-4 text-lg">{id}</p>
        <label className="text-brand font-bold" htmlFor="select">
          옵션
        </label>
        <select
          className="p-2 m-4 border-2 border-dashed border-brand outline-none"
          id="select"
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        >
          {options &&
            options.map((option: number | string, idx: number) => (
              <option key={idx}>{option}</option>
            ))}
        </select>
        <button
          className="w-full h-12 bg-red-300 rounded-full text-bold text-xl"
          onClick={handleClick}
        >
          장바구니에 추가
        </button>
      </div>
    </section>
  )
}
