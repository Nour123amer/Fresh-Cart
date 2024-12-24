import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import { userContext } from './User.context'
import axios from 'axios'
import toast from 'react-hot-toast'
import { data } from 'autoprefixer'


export const CartContext = createContext(null)

export default function CartProvider({children}){
    const [cartInfo ,setCartInfo] = useState(null);
    const {token} = useContext(userContext)
   
   async function addProductToCart({id}){
     try{
        const options={
            url:"https://ecommerce.routemisr.com/api/v1/cart",
            method:"POST",
            headers:{
                token,
            },
            data:{
                productId: id
            }
          };
    
          let {data} =await axios.request(options);
          console.log(data);
          setCartInfo(data);
          toast.success("product added to cart");
     }catch(error){
      console.log(error);
      toast.error('failed to add product to cart');
      
     }

    }

   async function getUserCart() {
  try{
    const options = { 
        url: 'https://ecommerce.routemisr.com/api/v1/cart',
        method: 'GET',
        headers:{
         token
        }
 
     }
 
     let {data} = await axios.request(options);
     console.log(data);
     setCartInfo(data)
     
  }catch(error){
    console.log(error);
    if(error.response.data.message.includes("No cart")){
    setCartInfo([])
    }
  }
   }

   async function removeProductFromCart({id}) {
    const options ={
        url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method:'DELETE',

        headers:{
            token
        },

        data:{
            productId: id
        }
    }

    let {data} = await axios.request(options)
  
  if(data.numOfCartItems === 0){
    setCartInfo([]);
  }else{
    setCartInfo(data);
  }
    
   }

   async function updateProduct({id,count}) {
    const options={
        url:`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        method:'PUT',

        headers:{
            token,
        },
        data:{
            count,
        }
    }

    let {data} = await axios.request(options);
    console.log(data);
    setCartInfo(data)
    
   }

   async function clearCart() {
    let options={
        url:`https://ecommerce.routemisr.com/api/v1/cart`,
        method:'DELETE',
        headers:{
            token,
        },
    }

   let {data} = await axios.request(options);
   console.log(data);
   if(message==='success'){
     setCartInfo([]);
   }
  
   }
    // useEffect(addProductToCart);

    return <CartContext.Provider value={{addProductToCart ,getUserCart ,cartInfo, setCartInfo ,removeProductFromCart, updateProduct,clearCart}}>
             {children}
           </CartContext.Provider>
}