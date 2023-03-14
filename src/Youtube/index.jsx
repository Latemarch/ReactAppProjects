import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppYoutube from './AppYoutube'
import Videos from './pages/Videos'
import Details from './pages/Details'

export const projects = [
  { index: true, element: <Videos /> },
  { path: ':keyward', element: <Videos /> },
  { path: '/watch/:id', element: <Details /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppYoutube />,
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
