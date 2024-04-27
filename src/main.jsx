import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Root from './routes/root'
import Footer from './routes/footer'
import ErrorPage from './errorpage'
import Product, {loader as productLoader} from './routes/product'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    
    children :[
      {path:"/",
    element: <Product/>,
    loader: productLoader,
      },
    ]
    
  },

  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
