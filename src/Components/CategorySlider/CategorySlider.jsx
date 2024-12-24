import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export default function CategorySlider() {
  const[Categories,setCategories] = useState(null)

  async function getCategories() {
    const options={
      url:"https://ecommerce.routemisr.com/api/v1/categories",
      method:"GET"
    }

    const {data} = await axios.request(options);
    setCategories(data.data)
  }

  useEffect(()=>{
    getCategories();
  },[])
  return (
   <>
   {Categories?<section className='pb-8 '>
    <h2 className='font-semibold text-lg pl-2 '>Shop Popular Categories</h2>
    <swiper-container loop={true} slides-per-view={6}>
      {Categories.map((Category)=><swiper-slide key={Category._id}>
       <Link to={`/category/${Category._id}`}>
       <img src={Category.image} 
        className="w-full h-72 object-cover"
        alt="" />
        <p>{Category.name}</p>
       </Link>
        
      </swiper-slide>)}
    </swiper-container>
   </section> : <Loading />}
   </>
  )
}
