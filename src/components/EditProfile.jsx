import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster,toast } from 'react-hot-toast';

const EditProfile = ({setShow,user}) => {
  const [firstName,setFirstName]=useState(user.first_name);
  const [lastName,setLastName]=useState(user.last_name);
  const[email,setEmail]=useState(user.email);
  const token=useSelector(state=>state.auth.token)
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
   const handleClose=()=>{
    setShow(false)
   }

   const handleSave=async(e)=>{
    e.preventDefault();
    if(!token){
        navigate('/login')
    }
    try{
       setLoading(true);
       const res=await axios.put(`https://reqres.in/api/users/${user.id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
       })
       toast.success("updated successfully")
       
       setLoading(false);
       setTimeout(() => {
        setShow(false);
       }, 2000);
      
   
  
    }
    catch(err){
        console.log(err.message)
    }
   }
    
  return (
   
    <div className='flex justify-center  w-full h-[100vh]  absolute top-0 left-0 bg-gray-100'>
    <div className='w-[600px] max-h-[360px] shadow-md rounded-xl p-4 flex flex-col gap-4 mt-40 relative'>
        <form action="">
            <h2 className='text-2xl font-medium text-center'>Edit Profile</h2>
            <span className='absolute right-4 top-4 cursor-pointer' onClick={handleClose}><IoIosCloseCircle size={25} className='text-red-500'/></span>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">First Name</label>
                <input type="text" className='border border-gray-300 rounded-lg px-3 py-2 outline-none' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                <label htmlFor="">Last Name</label>
                <input type="text" className='border border-gray-300 rounded-lg px-3 py-2 outline-none' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className='flex flex-col gap-2 mt-3'>
                <label htmlFor="">Email</label>
                <input type="email" className='border border-gray-300 rounded-lg px-3 py-2 outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='flex justify-center items-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer' onClick={handleSave}>Save</button>
            </div>
        </form>
    </div>
    <Toaster/>
    </div>
  )
}

export default EditProfile