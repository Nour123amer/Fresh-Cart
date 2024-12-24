import React from 'react'
import { Formik } from 'formik' 
import { useState } from 'react'
import axios from "axios"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../../Context/User.context'
import { Helmet } from 'react-helmet';

export default function Login() {
    const [errorMsg , setErrorMsg]= useState(null);
    const {token , setToken} = useContext(userContext);
    // console.log(token)
    // const [token,setToken] = useState(null);
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    const validationSchema = Yup.object({
       
        email:Yup.string().required("email is required").email("email is not valid"),
       
        password:Yup.string().required("password is required").matches(passwordRegex,"password should start with uppercase letter followed by combination of letters and numbers between 8 and 15"),
      
    })



   async function sendDataToLogin(values){
    let id;
    try{
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
            method:"POST",
            data:values
        };

        id = toast.loading("Waiting...");
        const {data} = await axios.request(options);
        console.log(data);
        toast.dismiss(id)
        toast.success("User loggedin successfully");
         setTimeout(()=>{
        if(data.message === 'success'){
            localStorage.setItem("token",data.token)
            setToken(data.token);
            navigate("/")
        }
    },3000)

    }catch(error){
        toast.dismiss(id);
        toast.error(error.response.data.message);
        console.log(error);
        setErrorMsg(error.response.data.message);
    }
    }
const formik= useFormik({
    initialValues:{
        name:"",
        email:"",
        password:"",
        repassword:"",
        phone:"",
    },
    validationSchema,

    onSubmit: sendDataToLogin
})
console.log(formik);

  return (
     <>
     <Helmet>
      <title>Login</title>
      <meta name='description' content='welcome to login page' />
    </Helmet>
     <section>
        <h2 className='text-3xl text-primary font-bold'>
            <i className='fa-regular fa-circle-user me-3'></i>
            <span>Login Now</span>
        </h2>

        <form className='flex flex-col gap-4 space-y-3 pt-8' onSubmit={formik.handleSubmit}>
           

            <div>
                <input type="email" 
                className='form-control w-full'
                placeholder='Email' 
                 name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                />

{formik.errors.email && formik.touched.name?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.email}</div>):("")
                
            }
            </div>

            <div>
                <input type="password"
                className='form-control w-full'
                placeholder='Password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                />
                   {formik.errors.password && formik.touched.password?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.password}</div>):("")
                
            }
            </div>

            <button type='submit' className='btn-primary'> Login </button>
        </form>
     </section>
     </>
  )
}
