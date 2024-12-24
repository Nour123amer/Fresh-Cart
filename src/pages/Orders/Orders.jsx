import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/Cart.context'
import { userContext } from '../../Context/User.context';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import { Helmet } from 'react-helmet';


export default function AllOrders() {
  const [orders, setOrders] = useState(null);
    const {cartInfo, setCartInfo} = useContext(CartContext);
    const {token} = useContext(userContext);

    const {id} = jwtDecode(token);

    async function getUserOrders() {
      const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
        method:'GET',
      }

      let {data} = await axios(options);
      console.log(data);
      setOrders(data);
      
    }

    useEffect(()=>{
      getUserOrders()
    },[])
  return (
    <>
    <Helmet>
      <title>Orders</title>
      <meta name='description' content='welcome to orders page' />
    </Helmet>
{!orders ? <Loading />:
 orders.map((order)=>(

  <div className='border border-red-400 rounded-md p-4'>
  <div className='flex justify-between'>
      <div>
          <p>{order.id}</p>
          <p></p>
      </div>
      <div className='flex gap-8'>
          {order.isDelivered ?(
            <span className='bg-green-500 text-white rounded-full px-4 py-1'>
            تم  التوصيل
        </span> ): (
          <span className='bg-red-500 text-white rounded-full px-4 py-1'>
          قيد التوصيل
      </span>
        )
          }
          {order.isPaid ?(<span  className='bg-green-500 text-white rounded-full px-4 py-1'>
              تم الدفع
          </span>):(<span  className='bg-blue-500 text-white rounded-full px-4 py-1'>
               غير مدفوع
          </span>)}
      </div>
  </div>
  
  <div className='grid grid-cols-12 mt-5'>
     {
      order.cartItems.map((product)=>(
        <div className='product border border-gray-400 rounded p-3 col-span-2'>
           <img src={product.product.imageCover} alt="" />
           <h3>{product.product.title}</h3>
           <span>{product.price}</span>
          </div>
      ))
     }

  </div>
</div>
 )

 )
}
    </>
  )
}
