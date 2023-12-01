import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import Data from './pages/Data'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'transaction',
        element:<Transaction/>
      },
      {
        path:"data",
        element:<Data/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
