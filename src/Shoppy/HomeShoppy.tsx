import React from 'react'
import BannerShoppy from './components/BannerShoppy'
import ProductsShoppy from './components/ProductsShoppy'

export default function HomeShoppy() {
  return (
    <div className="flex flex-col w-full justify-between ">
      <BannerShoppy />
      <ProductsShoppy />
    </div>
  )
}
