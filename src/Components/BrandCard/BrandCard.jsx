import React from 'react'
import { Link } from 'react-router-dom';

export default function BrandCard({brandInfo}) {
    let {_id , name, slug ,image} = brandInfo;
  return (
    <>
    <div className= 'sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg rounded-md overflow-hidden mb-4'>
        <div className='relative'>
        <img src={image} alt="" />
        <div className='layer opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col  gap-2 justify-center items-center layer absolute w-full h-full left-0 top-0 bg-black bg-opacity-15'>
    
       
            <p>{name}</p>
            <p>{slug}</p>
            <Link to={`/category/${_id}`}  className="icon hover:scale-110 transition-transform duration-300 cursor-pointer w-10 h-10 rounded-full bg-primary text-sm text-white flex justify-center items-center">
            <i className="fa-solid fa-eye "></i>
            </Link  >
        </div>
        </div>
    </div>
    </>
  )
}
