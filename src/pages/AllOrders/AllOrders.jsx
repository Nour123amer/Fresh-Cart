import React, { useContext } from 'react'
import { CartContext } from '../../Context/Cart.context'

export default function AllOrders() {
    const {cartInfo, setCartInfo} = useContext(CartContext);
  return (
    <>
    <div className='border border-red-400 rounded-md p-4'>
        <div className='flex justify-between'>
            <div>
                <p>Order ID</p>
                <p></p>
            </div>
            <div className='flex gap-8'>
                <span className='bg-red-500 text-white rounded-full px-4 py-1'>
                    قيد التوصيل
                </span>
                <span  className='bg-blue-500 text-white rounded-full px-4 py-1'>
                     غير مدفوع
                </span>
            </div>
        </div>
        <div>
            {/* <img src={cartInfo.imageCover} alt="" /> */}

        </div>
    </div>
    </>
  )
}
