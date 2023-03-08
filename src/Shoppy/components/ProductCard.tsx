import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({
  product,
  product: { id, image, title, price },
}: {
  product: any
}) {
  const navigate = useNavigate()
  return (
    <li
      onClick={() => {
        navigate(`/shoppy/products/${id}`, { state: { product } })
      }}
      className="flex flex-col justify-between rounded-lg shadow-md overflow-hidden cursor transition-all hover:scale-105"
    >
      <img className="w-full" src={image} alt={title} />
      <div className="mt-4 px-2 text-lg flex justify-between items-center">
        <h3 className="truncate">{title}</h3>
        <p>{`${price}원`}</p>
      </div>
    </li>
  )
}
