import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'
import Error from './pages/Error'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

// eslint-disable-next-line react-refresh/only-export-components
const AppLayout=()=>{
  return(
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

/*Routes*/

const router= createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path: '/portfolio',
        element:<Portfolio/>,
      },
      {
        path:'/contact',
        element: <Contact/>,
      }
    ],
    errorElement:<Error/>,
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
