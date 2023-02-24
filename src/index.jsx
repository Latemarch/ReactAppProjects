import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppToDoList from './Todo/AppTodoList.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import AppYoutube from './Youtube/AppYoutube'
import Videos from './Youtube/pages/Videos'
import Details from './Youtube/pages/Details'
import AppToDoRedux from './TodoWithRedux/AppTodoRedux'

export const projects = [
  { path: 'todo', element: <AppToDoList /> },
  { path: 'todoredux', element: <AppToDoRedux /> },
  {
    path: 'youtube',
    element: <AppYoutube />,
    children: [
      { index: true, element: <Videos /> },
      { path: ':keyward', element: <Videos /> },
      { path: 'watch/:id', element: <Details /> },
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
