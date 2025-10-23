import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllGames from "../Pages/AllGames";
import Authlayout from "../Authlayout/Authlayout";
import Login from "../Authlayout/Login";
import Register from "../Authlayout/Register";
import Profile from "../Pages/Profile";

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
      },
      {
        path:'/user-profile',
        element:<Profile/>
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
      path:'/auth/register',
      element:<Register/>
  }
 ]
  }
])

export default router