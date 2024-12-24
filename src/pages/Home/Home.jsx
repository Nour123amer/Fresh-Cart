import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard'
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import CategorySlider from '../../Components/CategorySlider/CategorySlider';
import Products from '../Products/Products';
import { useContext } from 'react';
import { CartContext } from '../../Context/Cart.context';
import { Helmet } from 'react-helmet';

export default function Home() {
    const [products,setProducts] = useState(null);
     const {getUserCart} = useContext(CartContext);
   async function getProducts(){
        const options= {
            url:"https://ecommerce.routemisr.com/api/v1/products",
            method:"GET"
        }
        const data = await axios.request(options);
        setProducts(data.data)
        console.log(data);
        console.log(typeof products)
        
    }

    useEffect(()=>{
        getProducts();
    },[])
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='welcome to home page' />
    </Helmet>
    <div className='p-0'>
   <HomeSlider />
   <CategorySlider /></div>
   <Products />
       {/* {products?(
 <div className='grid grid-cols-12 gap-4'>
{products?.map((product)=>(
  
    <ProductCard productInfo = {product} key={product._id}/>
  
  ))}
   </div>
       )
      :<Loading />
      } */}
   
    </>
  )
}
