import React from 'react'
import amazonPayLogo from "../../assets/images/amazon-pay.png"
import paypalLogo from "../../assets/images/paypal.png"
import masterCardLogo from "../../assets/images/mastercard.webp"
import americanExpress from "../../assets/images/American-Express-Color.png"
import geoglePlay from "../../assets/images/get-google-play.png"
import appStore from "../../assets/images/get-apple-store.png"
export default function Footer() {
  return (
  <footer className='bg-slate-100 py-4 absolute left-0 right-0 bottom-0'>
    <div className="container">
        <h2 className='text-2xl font-semibold '>Get the FreshCart App</h2>
        <p className='my-3'>We will send you a link, open it on your phone to download the app</p>
       <div className='flex gap-4'>
       <input type="text" className='form-control flex-grow' placeholder='Email...' />
       <button className='btn-primary'>Share App Link</button>
       </div>
    </div>

    <div className='container flex justify-between items-center mt-4'>
        <div className='flex gap-2 items-center'> 
            <span>Payment Partener</span>
            <div className='flex gap-2 items-center'>
<img src={amazonPayLogo} className='w-16' alt="" />
<img src={paypalLogo} className='w-16' alt="" />
<img src={masterCardLogo} className='w-16' alt="" />
<img src={americanExpress} className='w-16' alt="" />

            </div>

        </div>
        <div className=' flex gap-2 items-center'>
               <span>Get delivers with FreshCart</span>
               <div className='flex gap-2 items-center'>
                    <img src={geoglePlay} className='w-16' alt="" />
                    <img src={appStore} className='w-16' alt='' />
                </div>

        </div>
    </div>
  </footer>
  )
}
