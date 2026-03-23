import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Root from './pages/Root/Root.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
 {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/products",
    element: <Products></Products>
  },
  {
    path: "/wishlist",
    element: <Wishlist></Wishlist>
  },
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
