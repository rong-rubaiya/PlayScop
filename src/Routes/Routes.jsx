import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllGames from "../Pages/AllGames";
import Authlayout from "../Authlayout/Authlayout";
import Login from "../Authlayout/Login";
import Register from "../Authlayout/Register";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        index:true,
        path:'/',
        element:<Home/>
      },
      {
        path:'/all-games',
        element:<AllGames/>
      },
      {
        path:'/about',
        element:<AllGames/>
      }
    ]
  },
  {
    path:'/auth',
    element:<Authlayout/>,
    children:[{
      path:'/auth/login',
      element:<Login></Login>
    },
  {
      path:'/auth/Register',
      element:<Register/>
  }
 ]
  }
])

export default router