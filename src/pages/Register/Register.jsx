import React from 'react'
import { Formik } from 'formik' 
import { useState } from 'react'
import axios from "axios"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [errorMsg , setErrorMsg]= useState(null);
    const navigate = useNavigate();
    const phoneRegex = /^(?:\+?(\d{1,3}))?[-.●]?((\(\d{1,4}\))|\d{1,4})[-.●]?\d{1,4}[-.●]?\d{1,9}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    const validationSchema = Yup.object({
        name: Yup.string().required("name is required").min(3, "must be at least 3 characters")
        .max(15 ,"must be at max 15 character"),
        email:Yup.string().required("email is required").email("email is not valid"),
        phone:Yup.string().required("phone is required").matches(phoneRegex, "phone number is not valid"),
        password:Yup.string().required("password is required").matches(passwordRegex,"password should start with uppercase letter followed by combination of letters and numbers between 8 and 15"),
        repassword:Yup.string().required("repassword is required").oneOf([Yup.ref("password")],"password and repassword should be the same")
    })



   async function sendDataToRegister(values){
    let id;
    try{
        const options = {
            url:"https://ecommerce.routemisr.com/api/v1/auth/signup",
            method:"POST",
            data:values
        };

        id = toast.loading("Waiting...");
        const {data} = await axios.request(options);
        console.log(data);
        toast.dismiss(id)
        toast.success("User created successfully");
         setTimeout(()=>{
        if(data.message === success){
            navigate("/auth/login")
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
        rePassword:"",
        phone:"",
    },
    validationSchema,

    onSubmit: sendDataToRegister
})
console.log(formik);

  return (
     <>
     <Helmet>
      <title>Sign up</title>
      <meta name='description' content='welcome to signup page' />
    </Helmet>
     <section>
        <h2 className='text-3xl text-primary font-bold'>
            <i className='fa-regular fa-circle-user me-3'></i>
            <span>Register Now</span>
        </h2>

        <form className='flex flex-col gap-4 space-y-3 pt-8' onSubmit={formik.handleSubmit}>
            <div>
                <input type="text"
                className='form-control w-full'
                  placeholder='username'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            
                {formik.errors.name && formik.touched.name?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.name}</div>):("")
                
            }
            </div>

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
                <input type="tel"
                className='form-control w-full'
                placeholder='Phone'
                 name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                   {formik.errors.phone && formik.touched.phone?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.phone}</div>):("")
                
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

            <div>
                <input type="password"
                 className='form-control w-full'                
                placeholder='Repassword'
                name='repassword'
                value={formik.values.repassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                />
                  {formik.errors.repassword && formik.touched.repassword?( 
                     <div className='text-red-600 font-semibold mt-2'>
                    *{formik.errors.repassword}</div>):("")
                
            }
            </div>
            <button type='submit' className='btn-primary'> Sign Up</button>
        </form>
     </section>
     </>
  )
}
