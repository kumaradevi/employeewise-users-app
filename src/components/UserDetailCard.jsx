
import React from 'react'


const UserDetailCard = ({user}) => {
    
  return (
    <div className='flex justify-center items-center'>
 <div className='bg-gray-600 text-white w-[40%] h-[480px] rounded-2xl p-7 flex gap-6'>
        <div className='w-1/2 h-[40%]'>
            <img src={user?.avatar} alt="avatar"  className='w-[100%] h-full object-cover'/>
        </div>
        <div className='w-1/2'>
           <h2>user name</h2>
           <p>user email</p>
        </div>
 </div>
    </div>
  )
}

export default UserDetailCard
