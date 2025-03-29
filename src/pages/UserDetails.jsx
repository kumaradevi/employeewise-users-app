import React, { useState,useEffect} from 'react'
import UserDetailCard from '../components/UserDetailCard'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';
import { IoChevronBackOutline } from "react-icons/io5";

const UserDetails = () => {
    const {id}=useParams();
    const token=useSelector((state)=>state.auth.token);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

   

    const fetchUser=async ()=>{
        try{
        setLoading(true)
          const res=await axios.get(`https://reqres.in/api/users/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
          });
          setLoading(false)
          setUser(res.data.data)
        }
        catch(err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        if(!token){
            navigate('/login')
            } 
        fetchUser()
    },[id])
  return (
    <div className='w-full h-[100vh] mt-12'>
        {loading ? (<Loader/>) : 
       (<div> 
        <button className='ml-12 cursor-pointer text-xl font-medium flex gap-2 items-center' onClick={()=>navigate(-1)}><IoChevronBackOutline  size={23}/>Back</button>
        <UserDetailCard user={user}/> 
        </div>)}
    </div>
  )
}

export default UserDetails