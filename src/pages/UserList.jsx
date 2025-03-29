import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { setUsers } from '../featured/usersSlice'

const UserList = () => {
    const token=useSelector((state)=>state.auth.token);
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);
    const totalPages=2;
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users.data);
    const [query,setQuery]=useState("")
   if(!token){
    navigate('/login');
   
   }

    const fetchUsers=async()=>{
        try{
            setLoading(true)
       const res=await axios.get(`https://reqres.in/api/users?page=${page}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
       });
       setLoading(false);
       dispatch(setUsers(res.data.data))
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

    const filteredUsers=query? users.filter((user)=>user.first_name.toLowerCase().includes(query)):users;
  return (
    <div>
       {loading ? (<div className='flex justify-center items-center w-full h-[100vh]'> <Loader/> </div>): (
    <div className='w-[80%] mx-auto h-[100vh] '>
        <div className='border border-gray-400 rounded-full px-4 py-2 w-[270px] mt-12'>
            <input type="search" placeholder='Search ...' className='outline-none' onChange={(e)=>setQuery(e.target.value)}/>
        </div>
        <div className='mt-6  '>
        <UserCard users={filteredUsers}/>
        </div>
       <div className='mt-12 flex justify-center gap-4'>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium disabled:bg-gray-300' onClick={handlePrevious} disabled={page==1}>Prev</button>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium'>{page}</button>
       <button className='bg-blue-500 text-white px-5 py-2 rounded-md text-lg font-medium disabled:bg-gray-300' onClick={handleNext} disabled={page==totalPages}>next</button>
       </div>
    </div>)}
    </div>
  )
}

export default UserList