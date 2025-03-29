import React, { useState } from 'react'
import welcome from "../assets/welcome.jpg"
import { PiEnvelopeLight } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import logo from "../assets/logo.avif"
import axios from "axios"
import { Toaster ,toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../featured/authSlice';
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate =useNavigate()
  const dispatch=useDispatch()

  
  const handleLogin=async()=>{
    try{
       const res=await axios.post('https://reqres.in/api/login',{email,password});
       localStorage.setItem("token",res.data.token);
       dispatch(setAuth(res.data.token));
       toast.success("logged in successfully");
       setTimeout(() => {
        navigate('/')
       }, 2000);
    }catch(err){
      toast.error(err.message)
      console.log(res.message)
    }
  }
  return (
    <div className='w-full h-[100vh] bg-gray-50  flex flex-col lg:flex-row relative'>
    <div className='w-[25px] lg:w-[40px] absolute lg:top-6 lg:left-20 top-4 left-12'>
        <img src={logo} alt="" className='w-[100%] object-cover bg-gray-50'/>
    </div>
   {/* left */}
   <div className='w-full lg:w-1/2 flex justify-center items-center mt-20 lg:mt-0'>
    <img src={welcome} alt="welcome"  className='w-[60%] h-[70%] object-cover'/>
   </div>
   {/* right */}
   <div className='w-full lg:w-1/2 flex justify-center items-center'>
   <div className='w-[90%] h-[400px] lg:w-[60%] lg:h-[70%]'>
     <h4 className='text-3xl font-medium'>Welcome Back :)</h4>
     <p className='mt-3 text-gray-600 '>To keep connected with us please login with your personal information by email address and password</p>
   <div className='mt-12 bg-white shadow-sm rounded-xl lg:w-[420px] lg:h-[260px] w-full min-h-[200px]'>
    <div className='flex gap-5 items-center rounded-tr-xl rounded-tl-xl hover:bg-gray-200 p-5'>
        <div>
        <PiEnvelopeLight size={30} className='text-gray-500'/>
        </div>
        <div className='flex flex-col '>
        <label htmlFor="" className='text-gray-500 text-sm'>Email Address</label>
        <input type="email" className='outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
    </div>
    <div className='flex gap-5 items-center  hover:bg-gray-200 p-5'>
        <div>
        <CiLock size={30} className='text-gray-500'/>
        </div>
       <div className='flex flex-col '>
       <label htmlFor="" className='text-gray-500 text-sm'>Password</label>
       <input type="password" className='outline-none' value={password} onChange={(e)=>setPassword(e.target.value)}/>
       </div>
    </div>
    <div className='flex justify-center'>
    <button className='bg-blue-500 text-white px-6 py-2 my-5 rounded-full cursor-pointer' onClick={handleLogin}>Login Now</button>
    </div>

    </div>
   </div>


   </div>
    <Toaster/>
    </div>
  )
}

export default Login