import React from 'react'
import logo from "../assets/logo.avif"
import { useDispatch } from 'react-redux'
import { clearAuth } from '../featured/authSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
 const dispatch=useDispatch();
 const navigate=useNavigate()



  const handleLogout=()=>{
  dispatch(clearAuth());
  localStorage.removeItem("token")
  toast.success("logged out successfully")
 setTimeout(() => {
  navigate('/login')
 }, 2000);
  }
  return (
    <div className='bg-gray-500 text-white w-full h-[90px] sticky top-0 z-[999] '>
        <div className='flex justify-between w-[80%] h-[100%] mx-auto items-center'>
            <div className='w-[40px] flex items-center'>
        <img src={logo} alt="" className='w-[100%]'/>
        <p className='text-2xl font-medium'>EmployeeWise</p>
        </div>
       <div >
        <button onClick={handleLogout}>Logout</button>
         <img src="" alt="" />
       </div>
        </div>
    </div>
  )
}

export default Navbar