import React from 'react'
import logo from "../assets/logo.avif"
const Navbar = () => {
  return (
    <div className='bg-gray-500 text-white w-full h-[90px] sticky top-0 z-[999] '>
        <div className='flex justify-between w-[80%] h-[100%] mx-auto items-center'>
            <div className='w-[40px] flex items-center'>
        <img src={logo} alt="" className='w-[100%]'/>
        <p className='text-2xl font-medium'>EmployeeWise</p>
        </div>
       <div >
        <p>user name</p>
         <img src="" alt="" />
       </div>
        </div>
    </div>
  )
}

export default Navbar