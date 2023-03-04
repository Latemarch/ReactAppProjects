import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import AppYoutube from './Youtube/AppYoutube'
import Videos from './Youtube/pages/Videos'
import Details from './Youtube/pages/Details'
import AppToDoRedux from './TodoWithRedux/AppTodoRedux'
import AppShoppy from './Shoppy/AppShoppy'
import AllProductsShoppy from './Shoppy/pages/AllProductsShoppy'
import NewProductShoppy from './Shoppy/pages/NewProductShoppy'
import ProductDetailShoppy from './Shoppy/pages/ProductDetailShoppy'
import MyCartShoppy from './Shoppy/pages/MyCartShoppy'
import HomeShoppy from './Shoppy/HomeShoppy'

export const projects = [
  { path: 'todo', element: <AppToDoRedux /> },
  {
    path: 'youtube',
    element: <AppYoutube />,
    children: [
      { index: true, element: <Videos /> },
      { path: ':keyward', element: <Videos /> },
      { path: 'watch/:id', element: <Details /> },
    ],
  },
  {
    path: 'shoppy',
    element: <AppShoppy />,
    children: [
      { index: true, element: <HomeShoppy /> },
      { path: 'products/new', element: <NewProductShoppy /> },
      { path: 'products/:id', element: <ProductDetailShoppy /> },
      { path: 'carts', element: <MyCartShoppy /> },
      { path: 'products', element: <AllProductsShoppy /> },
    ],
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: projects,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
