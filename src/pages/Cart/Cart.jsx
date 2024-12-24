import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Cart.context'
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';

export default function Cart() {
  const {getUserCart,cartInfo ,removeProductFromCart ,updateProduct,clearCart} = useContext(CartContext);


  useEffect(()=>{
    getUserCart()
  },[])
  return (
  <>
  <Helmet>
      <title>Cart</title>
      <meta name='description' content='welcome to cart page' />
    </Helmet>

  {cartInfo === null ? (<Loading />) :(
    <section className='bg-slate-100 p-5'>
    <h2 className='text-2xl font-bold mb-2'>
        <span>Shop Cart </span> <i className='fa-solid fa-cart-shopping text-lg ml-2'></i></h2>

   {
    cartInfo.length=== 0?(
      <div className='py-16 flex justify-center items-center flex-col'>
      <h3 className='text-lg'>there are no items yet</h3>
      <Link to="/" className='btn-primary text-sm mt-2'>ADD YOUR FIRST PRODUCT TO CART</Link>
  </div>
    ):(

      

      
        cartInfo.data.products.map((product)=>(
          
<div key={product._id} className=' grid grid-cols-12 gap-2 items-center mb-2'>
        <div className='col-span-2'>
          <img src={product.product.imageCover} className='mr-3' alt="product-image" />
        </div>

        <div className='col-span-10'>
          <div className='flex justify-between items-center '>
            <div>
              <h3>{product.product.title}</h3>
              <h4>{product.price}</h4>
              <button onClick={()=>{removeProductFromCart({id:product.product.id})}} className='bg-red-500 rounded-md text-white mt-3 px-2 py-1'><i className='fa-solid fa-trash-can mr-2'></i> Remove</button>
            </div>
            <div className=' flex gap-4 items-center'>
              <button onClick={()=>{
                updateProduct({id:product.product.id,count:product.count +1})
              }} className=' bg-red-500 rounded-md text-white mt-3 px-2 py-1'> <i className="fa-solid fa-plus"></i> </button>
              <span>{product.count}</span>
              <button onClick={()=>{
                updateProduct({id:product.product.id,count:product.count -1})
              }}   
              className=' bg-red-500 rounded-md text-white mt-3 px-2 py-1'> <i className="fa-solid fa-minus"></i> </button>
            </div>
          </div>
        
        </div>
      </div>
        ))
    
    )
   }
     <button 
   onClick={()=>{clearCart}}
   className='btn-primary text-bold ms-auto block'>Clear Cart</button>
  </section>
  )}
  <Link to='/checkout' className='bg-red-600 px-4 py-2 text-white rounded-md mt-4 block ms-auto font-bold' >Next Step</Link>
  </>
  
  )
}
