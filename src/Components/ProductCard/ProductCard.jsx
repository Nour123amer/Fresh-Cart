import React, { createContext, useContext } from 'react'
import { CartContext } from '../../Context/Cart.context';
import image1 from "../../assets/images/blog-img-1.jpeg"
import { Link } from 'react-router-dom';

export default function ProductCard({productInfo}) {
    const {imageCover,description,price,ratingsAverage ,id} = productInfo;
    const {addProductToCart} = useContext(CartContext);
  return (
   <>
   <div className='col-span-12  text-white sm:col-span-12 md:col-span-6 lg:col-span-4 xl-col-span-2 shadow-lg rounded-md overflow-hidden '>
    <div className='relative'>
    <img src={imageCover} alt="" />
    <div className='layer py-8 px-4 opacity-0 hover:opacity-100 transition-opacity duration-300 flex-row  gap-2 justify-center items-center layer absolute w-full h-full left-0 top-0 bg-black bg-opacity-15'>
      
       
        <p className='mb-4'>{description}</p> 

        <div className='flex w-3/4 justify-between '>
        <div
        onClick={()=>{addProductToCart({id})}}
        className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
        <i className="fa-solid fa-cart-shopping "></i>
        </div> 
         <div className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
            <i className='fa-solid fa-heart '></i>
        </div>
        <Link to={`/product/${id}`}  className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
        <i className="fa-solid fa-eye "></i>
        </Link  >
        </div>
    </div>
    </div>

    {/* <div className='p-3'>
        <h3 className='text-primary'>{category.name}</h3>
        <h2 className='text-lg font-semi-bold line-clamp-2'>{title}</h2>
        <div className='flex items-center justify-between mt-4'>
            <span>{price}L.E</span>
            <div className='flex items-center gap-3'>
                <i className='fa-solid fa-star text-yellow-500'></i>
                <span>{ratingsAverage}</span>
            </div>
        </div>
    </div> */}
   </div>
   </>
  )
}
