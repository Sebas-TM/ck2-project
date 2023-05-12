import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout'
import Nosotros from './pages/Nosotros'
import Index from './pages/Index'
import Contacto from './pages/Contacto'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/nosotros',
        element: <Nosotros />
      },
      {
        path: '/contacto',
        element: <Contacto />
      }
      // {
      //   path: '/canchas',
      //   element: <Canchas />
      // }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
  />
)
