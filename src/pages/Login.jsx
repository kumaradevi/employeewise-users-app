import React from 'react'
import welcome from "../assets/welcome.jpg"
import { PiEnvelopeLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import logo from "../assets/logo.jpg"
const Login = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-50  flex'>
    <div className='w-[100px]'>
        <img src={logo} alt="" className='w-[100%] object-cover bg-gray-50'/>
    </div>
   {/* left */}
   <div className='w-1/2 flex justify-center items-center'>
    <img src={welcome} alt="welcome"  className='w-[60%] h-[70%] object-cover'/>
   </div>
   {/* right */}
   <div className='w-1/2 flex justify-center items-center'>
   <div className='w-[60%] h-[70%]'>
     <h4 className='text-3xl font-medium'>Welcome Back :)</h4>
     <p className='mt-3 text-gray-600 '>To keep connected with us please login with your personal information by email address and password</p>
   <div className='mt-12 bg-white shadow-sm rounded-xl w-[420px] h-[260px] '>
    <div className='flex gap-5 items-center rounded-tr-xl rounded-tl-xl hover:bg-gray-200 p-5'>
        <div>
        <PiEnvelopeLight size={30} className='text-gray-500'/>
        </div>
        <div className='flex flex-col '>
        <label htmlFor="" className='text-gray-500 text-sm'>Email Address</label>
        <input type="email" className='outline-none'/>
        </div>
    </div>
    <div className='flex gap-5 items-center  hover:bg-gray-200 p-5'>
        <div>
        <CiLock size={30} className='text-gray-500'/>
        </div>
       <div className='flex flex-col '>
       <label htmlFor="" className='text-gray-500 text-sm'>Password</label>
       <input type="password" className='outline-none'/>
       </div>
    </div>
    <div className='flex justify-center'>
    <button className='bg-blue-500 text-white px-6 py-2 mt-5 rounded-full cursor-pointer'>Login Now</button>
    </div>

    </div>
   </div>


   </div>
    
    </div>
  )
}

export default Login