import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const [users,setUsers]=useState([])
    const token=useSelector((state)=>state.auth.token);
    const navigate=useNavigate();
    const [page,setPage]=useState(1);
    const totalPages=2;
    
   if(!token){
    navigate('/login');
   
   }

    const fetchUsers=async()=>{
        try{
       const res=await axios.get(`https://reqres.in/api/users?page=${page}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
       });
       setUsers(res.data.data)
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[page])

    const handlePrevious=()=>{
        setPage(page=>page>1 ? page-1 :1)
    }

    const handleNext=()=>{
        setPage(page=>page+1)
    }
  return (
    <div className='w-[80%] mx-auto h-[100vh] '>
        <div className='mt-12  '>
        <UserCard users={users}/>
        </div>
       <div className='mt-12 flex justify-center gap-4'>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium disabled:bg-gray-300' onClick={handlePrevious} disabled={page==1}>Prev</button>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium'>{page}</button>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium disabled:bg-gray-300' onClick={handleNext} disabled={page==totalPages}>next</button>
       </div>
    </div>
  )
}

export default UserList