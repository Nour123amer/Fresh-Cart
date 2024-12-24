import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Online from '../Online/Online'
import Offline from '../Offline/Offline'

export default function Layout() {
  return (
    <>
    <Navbar />
   <Online>
   <div className="container pb-[240px] mt-[4rem]">
    <Outlet />
    </div>
   </Online>

   <Offline>
    Ceck your internet connection...
   </Offline>
    <Footer />
    </>
  )
}
