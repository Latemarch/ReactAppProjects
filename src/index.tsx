import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppToDoList from './Todo/AppTodoList.jsx'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import SearchHearder from './SearchHearder'
import AppYoutube from './Youtube/AppYoutube'
export const projects = [
  { path: 'todo', element: <AppToDoList /> },
  { path: 'youtube', element: <AppYoutube /> },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: projects,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
