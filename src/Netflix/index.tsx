import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppNetflix from './AppNetflix'
import HomeNetflix from './pages/HomeNetflix'
import SearchNetflix from './pages/SearchNetflix'
import TvNetflix from './pages/TvNetflix'

export default function index() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppNetflix />,
      children: [
        { index: true, element: <HomeNetflix /> },
        { path: 'tv', element: <TvNetflix /> },
        { path: 'search', element: <SearchNetflix /> },
      ],
    },
  ])
  return <RouterProvider router={router} />
}
