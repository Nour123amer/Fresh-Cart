import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading/Loading';

export default function Products() {
     const [products, setProducts] = useState([]);


    async function getProducts() {
        let {data} = await axios('https://ecommerce.routemisr.com/api/v1/products');
        // setProducts(data.data);
        return data
    }

    let {data ,isLoading ,isFetched } = useQuery({
        queryKey:['products'],
        queryFn:getProducts,
        refetchOnMount:true,
        staleTime:5000,
        refetchOnWindowFocus:false,
        refetchInterval:1000,
        gcTime:10000,
    })

    if(isLoading){
        return <Loading />
    }

    
    // useEffect(()=>{
    //     getProducts()
    // },[])



  return (
   <>
   <Helmet>
      <title>Products</title>
      <meta name='description' content='welcome to products page' />
    </Helmet>
 
       <div className='grid grid-cols-12 gap-2'>
    {data.data.map((product)=>(
     
    <ProductCard productInfo={product} key={product.id} />
  
   ) )}
  </div>
   
   </>
  )
}
