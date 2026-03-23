import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayouts,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"/login",
            Component:Login
        },
        {
            path:"/register",
            Component:Register
        }
    ]
  },
]);