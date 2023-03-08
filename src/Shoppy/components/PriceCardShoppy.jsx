import React from 'react'

export default function PriceCardShoppy({ text, price }) {
  return (
    <div className="w-1/5 bg-red-200 p-4 m-2 mx-2 rounded-2xl text-center text-lg md:text-xl">
      <p>{text}</p>
      <p className="font-bold text-brand">{price}</p>
    </div>
  )
}
