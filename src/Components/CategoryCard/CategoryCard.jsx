import React from 'react'
import { Link } from 'react-router-dom';
export default function CategoryCard({categoryInfo}) {
    let {_id ,name ,slug ,image ,createdAt ,updatedAt} = categoryInfo;

  return (
   <>
   
<div className='col-span-12 text-white sm:col-span-12 md:col-span-6 lg:col-span-4 xl-col-span-2 shadow-lg rounded-md overflow-hidden '>
    <div className='relative'>
    <img src={image} alt="" />
    <div className='layer opacity-0 hover:opacity-100 transition-opacity duration-300 flex-row py-8 px-4 gap-2 justify-center items-center layer absolute w-full h-full left-0 top-0 bg-black bg-opacity-15'>
       

        {/* <div
        onClick={()=>{addProductToCart({id})}}
        className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
        <i className="fa-solid fa-cart-shopping "></i>
        </div> */}
        <p className='mb-2'>{name}</p>
        <p className='mb-2'>{slug}</p>
        <p className='mb-2'>{createdAt}</p>
        <p className='mb-2'>{updatedAt}</p>
        <div className='flex justify-between w-3/4 px-2'>
        <div className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
            <i className='fa-solid fa-heart '></i>
        </div>
        <Link to={`/category/${_id}`}  className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
        <i className="fa-solid fa-eye "></i>
        </Link  >
        </div>
    </div>
    </div>
</div>
   </>
  )
}
