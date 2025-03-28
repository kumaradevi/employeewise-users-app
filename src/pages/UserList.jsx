import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'

const UserList = () => {
    const [users,setUsers]=useState([])

    const fetchUsers=async()=>{
        try{
       const res=await axios.get('https://regres.in/api/users',{
        headers:{
            Authorization:`Bearer ${token}`
        }
       });
       console.log(res)
        }
        catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div className='w-full h-[100vh] bg-gray-50'>
        <UserCard/>
    </div>
  )
}

export default UserList