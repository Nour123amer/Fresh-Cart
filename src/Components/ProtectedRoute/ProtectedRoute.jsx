import React, { useContext } from 'react'
import Home from '../../pages/Home/Home'
import { Navigate } from 'react-router-dom'
import { userContext } from '../../Context/User.context';

export default function ProtectedRoute({children}) {
    const {token} = useContext(userContext);
    const user= false;
    if(token){
        return children
    }
    else{
        return <Navigate to={"/auth/login"} />
    }
  return (
   <>
   <div>ProtectedRoute</div>
   {<Home />}
   </>
  )
}
