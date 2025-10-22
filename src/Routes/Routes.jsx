import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import AllGames from "../Pages/AllGames";

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
      }
    ]
  },
  {
    path:'/auth',
    element: <h1>Authentication layout</h1>
  }
])

export default router