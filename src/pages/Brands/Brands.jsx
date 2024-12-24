import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';
import BrandCard from '../../Components/BrandCard/BrandCard';

export default function Brands() {
    const [brands ,setBrands] = useState([]);
    async function getBrands( ) {
        let {data} = await axios('https://ecommerce.routemisr.com/api/v1/brands');
        setBrands(data.data);
    }

    useEffect(()=>{
        getBrands()
    },[])
  return (
    <>
    <Helmet>
      <title>Brands</title>
      <meta name='description' content='welcome to brands page' />
    </Helmet>
    {brands? 
    <div className='grid grid-cols-12 gap-4'>
 {
     brands.map((brand) => {
      
         return <BrandCard brandInfo={brand} key={brand._id} />
   
                        }
                       )
                    }
    </div>:<Loading />

}
    </>
  )
}


