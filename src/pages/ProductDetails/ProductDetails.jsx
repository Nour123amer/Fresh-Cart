import axios from 'axios'
import React, { useContext, useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading';
import ReactImageGallery from 'react-image-gallery';
import { CartContext } from '../../Context/Cart.context';
import useOnlineStatus from '../../Hooks/useOnlineStatus';

export default function ProductDetails() {
    const [details ,setDetails] = useState(null);
    const {addProductToCart} = useContext(CartContext);
    const isOnline= useOnlineStatus()
    let {id} = useParams();
    console.log(id);
   

    async function getProductDetails(){
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        console.log(data); 
        setDetails(data.data);
    }

    useEffect(()=>{
      getProductDetails()
    },[])

    const imageItems = details?.images.map((imageURL)=>{
       return{
        original:imageURL ,
        thumbnail: imageURL ,
       }
    })
  return (
   <>
     {details===null?(<Loading />):
  (<div className='grid grid-cols-12 gap-6 mt-16'>
    <div className='col-span-4'>
        <ReactImageGallery items={imageItems} 
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
        />
        {/* <img src={details.imageCover} className='w-full' alt="" /> */}

        
    </div>
    <div className='col-span-8 pt-14'>
        <h2 className='text-2xl font-bold'>{details.title}</h2>
        <h3 className='text-primary font-semi-bold'>{details.category.name}</h3>
        <p className='mt-3'>{details.description}</p>
        <div className='flex justify-between items-center mt-4'>
            <span>{details.price} L.E</span>
            <span><i className='fa-solid fa-star text-yellow-400 mr-1'></i>{details.ratingsAverage}</span>
        </div>
        <button className='btn-primary w-full mt-4'
        onClick={()=>{addProductToCart({id:details.id})}}
        >{isOnline ? 'Add to cart' :'Check your internet connection'}</button>
    </div>
 </div>)
     }
   </>
  )
}
