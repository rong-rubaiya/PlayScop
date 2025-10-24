import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllGames from "../Pages/AllGames";
import Authlayout from "../Authlayout/Authlayout";
import Login from "../Authlayout/Login";
import Register from "../Authlayout/Register";
import Profile from "../Pages/Profile";
import About from './../Component/About';
import Singlecard from "../Component/Singlecard";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        index:true,
        path:'/',
        loader: () => fetch('/games.json').then(res => res.json()),
        element:<Home/>

      },
      {
        path:'/all-games',
        loader: () => fetch('/games.json').then(res => res.json()),
        element:<AllGames/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/user-profile',
        element:<Profile/>
      },
      {
        path:'/singlegames/:id',
        element:<Singlecard></Singlecard>,
        loader:() => fetch('/games.json').then(res => res.json())
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