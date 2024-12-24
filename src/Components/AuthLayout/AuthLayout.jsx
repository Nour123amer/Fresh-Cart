import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
  <>
   <Navbar />
      <div className="container pb-[240px] mt-[4rem]">
      <Outlet />
      </div>
      <Footer />
  </>
  )
}
