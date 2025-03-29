import React from 'react'
import { Link } from 'react-router-dom'


const UserCard = ({users}) => {
   
  return (
    <div className='flex flex-wrap  gap-6'>
    {users.map((user)=>(
        <div className='bg-gray-700 text-white shadow-sm  w-[100%] sm:w-[380px] h-48 p-5 rounded-lg flex gap-6 hover:border border-amber-400 hover:bg-white hover:text-amber-400 hover:scale-105 transition-all' key={user.id}>
            <div className='w-[150px] h-[150px]'>
            <img src={user.avatar} alt="avatar" className='w-[100%] h-[100%] rounded-full object-cover overflow-auto'/>
            </div>
            
       
       <div className='flex flex-col justify-center items-center'>
       <Link to={`/user/${user.id}`}> 
        <h2 className='text-xl font-medium hover:text-amber-600'>{user.first_name} {user.last_name}</h2>
        <p className='text-sm'>{user.email}</p>
        </Link>
        
        </div>
       
        </div>
    ))}
   </div>
  )
}

export default UserCard