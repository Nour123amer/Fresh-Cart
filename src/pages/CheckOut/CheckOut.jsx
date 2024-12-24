import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/Cart.context'
import axios from 'axios';
import { userContext } from '../../Context/User.context';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function CheckOut(values) {
    const [orderType ,setOrderType] = useState(null);
    const {cartInfo ,setCartInfo} = useContext(CartContext);
    const {token} = useContext(userContext);
        const naviate = useNavigate();


   async function createCashOrder(){
    console.log('cash#########');
    
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/${cartInfo._id}`,
        method:'POST',
        headers:{
            token,
        },
        data:{
           values
        }
    }

    let {data}= await axios.request(options);
    console.log(data);
    setCartInfo([]);
    setTimeout(()=>{
        naviate('/orders')
    },2000)
    
   }

   async function createOnlineOrder(){
    console.log('onlinee########');
    
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartInfo._id}?url=http://localhost:3000`,
        method:'POST',
        headers:{
            token,
        },
        data:{
           values
        }
    }

    let {data} = await axios.request(options);
    console.log(data);

    if(data.status==='success'){
        window.location.href= data.session.url;
    }
   }


    const formik = useFormik({
        initialValues:{
            "shippingAddress":{
                "details": "",
                "phone": "",
                "city": ""
                },
        },

        onSubmit:(values)=>{
            console.log(values);
            if(orderType==='cash')
                createCashOrder(values);
            else
                createOnlineOrder(values);
        }
    })
  return (
   <>
   <Helmet>
      <title>Check out</title>
      <meta name='description' content='welcome to check out page' />
    </Helmet>
   <h2 className='mb-4 text-2xl'>Shipping Address</h2>
   <form onSubmit={formik.handleSubmit} className='w-3/4 flex flex-col mx-auto'>
   <input type="text"
   name='shippingAddress.city'
    value={formik.values.shippingAddress.city}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
   placeholder='city' className='w-full form-control  mb-3' />

   <input type="text"
   name='shippingAddress.phone'
   value={formik.values.shippingAddress.phone}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   placeholder='phone' className='w-full form-control mb-3' />


   <textarea 
   name="shippingAddress.details"
   value={formik.values.shippingAddress.details}
   onChange={formik.handleChange}
   onBlur={formik.handleBlur}
   id="" placeholder='details' className='w-full form-control mb-3'></textarea>
   <div className="btns flex gap-4 ">

    <button type='submit'
    onClick={()=>{
        setOrderType('cash');
    }}
    className='bg-green-600 text-white px-2 py-1 rounded-md '>Cash Order</button>


    <button type='submit'
    onClick={()=>{
        setOrderType('online');
    }}

    className='bg-blue-500  text-white px-2 py-1 rounded-md '>Online Payment</button>
   </div>
   </form>
   </>
  )
}
