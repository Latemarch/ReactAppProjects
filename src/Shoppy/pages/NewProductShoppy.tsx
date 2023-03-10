import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addNewProduct } from '../apis/firebase.js'
import { uploadImage } from '../apis/uploader'
interface IProduct {
  title?: string
  price?: number
  options?: string
}

export default function NewProductShoppy() {
  const [product, setProduct] = useState<IProduct>({})
  const [file, setFile] = useState<File | null>()
  const [success, setSuccess] = useState<string | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  const queryClient = useQueryClient()
  const addProduct = useMutation(
    ({ product, url }: { product: IProduct; url: string }) =>
      addNewProduct(product, url),
    { onSuccess: () => queryClient.invalidateQueries(['products']) },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setFile(files && files[0])
      return
    }
    setProduct((product) => ({ ...product, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    uploadImage(file).then((urlJson) => {
      const parsedUrl = JSON.parse(urlJson)
      const url = parsedUrl.url
      addProduct.mutate(
        { product, url },
        {
          onSuccess: () => {
            setSuccess('Uploading is completed.')
            setTimeout(() => setSuccess(null), 4000)
          },
        },
      )
    })
  }

  return (
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 상품 등록</h2>
      {success && <p className="my-2">상품이 등록 되었습니다.</p>}
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="local file"
        />
      )}
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="w-3/4 p-2 outline-none border border-gray-300 my-1"
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          className="w-3/4 p-2 outline-none border border-gray-300 my-1"
          type="text"
          name="title"
          value={product?.title ?? ''}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          className="w-3/4 p-2 outline-none border border-gray-300 my-1"
          type="text"
          name="price"
          value={product?.price ?? ''}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          className="w-3/4 p-2 outline-none border border-gray-300 my-1"
          type="text"
          name="options"
          value={product?.options ?? ''}
          placeholder="사이즈 (,)로 구분"
          required
          onChange={handleChange}
        />
        <button className="bg-red-400 w-3/4 border hover:bg-blue font-bold py-2 px-4 rounded">
          {isLoading ? 'Uploading...' : '제품등록'}
        </button>
      </form>
    </section>
  )
}
