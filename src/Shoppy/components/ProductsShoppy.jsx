import useProducts from '../hooks/useProducts.js'
import ProductCard from './ProductCard.tsx'

export default function ProductsShoppy() {
  console.log('test')
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts()
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul className="grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  )
}
