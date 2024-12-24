import React, { useContext, useEffect } from 'react'
import logo from "../../assets/images/freshcart-logo.svg"
import { Link, NavLink } from 'react-router-dom'
import { userContext } from '../../Context/User.context'
import { CartContext } from '../../Context/Cart.context';

export default function Navbar() {
    const {token,logOut} = useContext(userContext);
    const{getUserCart ,cartInfo} = useContext(CartContext);


    useEffect(()=>{
        getUserCart()
    },[])
  return (
   <>
   <nav className='bg-slate-100 sm:flex sm:flex-col sm:flex-wrap p-3 fixed left-0 right-0 top-0 z-50'>
    <div className="container flex gap-8">
      <h1>
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
      </h1>


{token?
    <ul className='flex gap-6 items-center'>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":" before:w-0"}`
        }} to="/home">Home</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold  before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":"before:w-0 "}`
        }} to="/products">Products</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":" before:w-0"}`
        }} to="/categories">Categories</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":"before:w-0 "}`
        }} to="/brands">Brands</NavLink>
    </li>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":"before:w-0 "}`
        }} to="/orders">Orders</NavLink>
    </li>
 
</ul> :""
}

<Link to="/cart" className='ms-auto relative'>
    <i className='fa-solid fa-cart-shopping text-lg'></i>
    <span className='bg-primary w-6 h-6 flex justify-center items-center rounded-full text-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 '>{cartInfo=== null ? <i className='fa-solid fa-spinner fa-spin'></i> : cartInfo.numOfCartItems || 0}</span>
</Link>

<ul className='flex gap-6 items-center '>
    <li>
        <Link to="https://www.facebook.com">
        <i className='fa-brands fa-facebook'></i>
        </Link>
    </li>
    <li>
        <Link to="https://www.youtube.com">
        <i className='fa-brands fa-youtube'></i>
        </Link>
    </li>
    <li>
        <Link to="https://www.instagram.com">
        <i className='fa-brands fa-instagram'></i>
        </Link>
    </li>
    <li>
        <Link to="https://www.twitter.com">
        <i className='fa-brands fa-twitter'></i>
        </Link>
    </li>
    <li>
        <Link to="https://www.linkedin.com">
        <i className='fa-brands fa-linkedin'></i>
        </Link>
    </li>

</ul>

<ul className='flex gap-6 items-center'>
  {!token ?
  <>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":" before:w-0"}`
        }} to="/auth/login">Login</NavLink >
    </li>
    <li>
        <NavLink className={({isActive})=>{
            return `relative before:w-0 hover:before:w-full hover:before:font-bold before:transtion-[width] before:duration-300 before:absolute before:h-[2px] before:bg-primary before:left-0 before:-bottom-1 ${isActive? "font-bold before:w-full":" before:w-0"}`
        }}  to="/auth/signup">Signup</NavLink >
    </li> 
  </> :  <li className='cursor-pointer'>
        <span onClick={logOut}>
        <i className='fa-solid fa-long-arrow-alt-right'></i>
        </span>
    </li>}

</ul>

    </div>
   </nav>
   </>
  )
}
