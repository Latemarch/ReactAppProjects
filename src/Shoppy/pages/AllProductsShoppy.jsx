import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../apis/firebase.js'
import ProductCard from '../components/ProductCard.tsx'
import ProductsShoppy from '../components/ProductsShoppy.jsx'

export default function AllProductsShoppy() {
  return (
    <>
      <ProductsShoppy />
    </>
  )
}
