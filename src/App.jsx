
import './App.css'
import { RouterProvider,Routes, Router,createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Login from './pages/Login/Login'
import Notfound from './pages/Notfound/Notfound'
import Register from './pages/Register/Register'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home/Home'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import UserProvider from './Context/User.context'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Products from './pages/Products/Products'
import Categories from './pages/Categories/Categories'
import Brands from './pages/Brands/Brands'
import AuthLayout from './Components/AuthLayout/AuthLayout'
import Orders from './pages/Orders/Orders'
import CartProvider from './Context/Cart.context'
import CheckOut from './pages/CheckOut/CheckOut'
import AllOrders from './pages/AllOrders/AllOrders'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/production'
import Online from './Components/Online/Online'
import Offline from './Components/Offline/Offline'


function App() {
 const routes = createBrowserRouter([
  {
  path:"/" ,element:(<ProtectedRoute>
    <Layout />
  </ProtectedRoute>) ,children:[
    {index:true ,element:<ProtectedRoute>
      <Home />
    </ProtectedRoute>},
    {path:'/home',element:<Home />},
    {path:"/category/:id" ,element: <h2>category</h2>},
    {path:"/products",element:<Products />},
    {path:"/orders",element:<Orders />},
    {path:"/categories",element:<Categories />},
    {path:'/brands',element:<Brands />},
    {path:"/product/:id" , element:<ProductDetails />},
    {path:"/cart" ,element:<Cart />}, 
    {path:'/orders',element:<Orders />},
    {path:'/allorders',element:<AllOrders />},
    {path:"/checkout" ,element:<CheckOut />}, 
    {path:"*",element:<Notfound />},
  ]
 },


 {path:"/auth", element:<Layout />,children:[
   {path:"login",element:<Login />},
  {path:"signUp",element:<Register />},
 ]}
])

const myClient = new QueryClient()

  return (
    <>

<QueryClientProvider client={myClient}>
<UserProvider>
  <CartProvider >
<RouterProvider router={routes}>

</RouterProvider>
<ReactQueryDevtools></ReactQueryDevtools>
<Toaster />
</CartProvider>
</UserProvider>
</QueryClientProvider>

    </>
  )
}

export default App
