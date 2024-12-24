import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';

export default function Categories() {
    // const [categories, setCategories] = useState([]);
    async function getCategories() {
        let data = await axios('https://ecommerce.routemisr.com/api/v1/categories');
        console.log(data.data.data);

        // setCategories(data.data.data);
        return data;
    }

    let {data ,isLoading , isFetched} = useQuery({
        queryKey:['categories'],
        queryFn:getCategories
    });

    if(isLoading){
        return <Loading />
    }

    // useEffect(() => {
    //     getCategories()
    // }, [])
    return (
        <>
        <Helmet>
      <title>Categories</title>
      <meta name='description' content='welcome to categories page' />
    </Helmet>

          
                <div className='grid grid-cols-12 gap-2'>
                    {
                        data.data.data.map((category) => {
                           return <CategoryCard categoryInfo={category} key={category._id} />
                        }
                       )
                    }
                </div>
               
        </>
    )
}
