import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewProduct, getProducts } from '../apis/firebase'

export default function useProducts() {
  const queryClient = useQueryClient
  const productsQuery = useQuery(['products'], getProducts)
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    { onSuccess: () => queryClient.invalidateQueries(['products']) },
  )

  return { productsQuery, addProduct }
}
