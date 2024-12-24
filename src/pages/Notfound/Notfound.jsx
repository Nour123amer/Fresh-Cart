import React from 'react'
import notFoundImage from "../../assets/images/error.svg"

export default function Notfound() {
  return (
    <>
     <img src={notFoundImage} className='mx-auto' alt="" />
    </>
  )
}
