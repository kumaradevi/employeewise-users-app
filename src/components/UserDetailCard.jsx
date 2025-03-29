import axios from "axios";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import { Toaster,toast } from "react-hot-toast";


const UserDetailCard = ({ user }) => {
  const [show,setShow]=useState(false);
  const token=useSelector(state=>state.auth.token)
  const navigate=useNavigate()

  const handleDelete = async (id) => {
    const confirm=window.confirm("Are you sure to delete user?");
    if(!confirm){
        return
    }
    if(!token){
    navigate('/login')
    }
    try {
      const res = await axios.delete(`https://reqres.in/api/users/${id}`,{
        headers:{
          Authorization:
            `Bearer ${token}`
          
        }
      });
      toast.success("deleted Successfully");
      setTimeout(() => {
        navigate('/')
      }, 2000);
    } catch (err) {
      toast.error(err.message)
      console.error(err.message);
    }
  };
  const handleEdit = (id) => {
    setShow(true)
  };

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md w-[40%] h-[480px] rounded-2xl p-7 flex flex-col  gap-6 relative">
        <div className="bg-green-200 w-full h-[40%] rounded-lg"></div>
        <div className="absolute top-20 right-[230px] w-[150px] h-[150px] rounded-full">
          <img
            src={user?.avatar}
            alt="avatar"
            className="w-[100%] h-full object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col items-canter mt-8 items-center">
          <h2 className="text-4xl font-medium">
            {user?.first_name} {user?.last_name}
          </h2>
          <p className="mt-2">{user?.email}</p>
        </div>
        <div>
          <div className="absolute right-10 flex gap-3">
            <button onClick={() => handleEdit(user.id)}>
              <FaEdit size={30} className="text-blue-500" />
            </button>
            <button onClick={() => handleDelete(user.id)}>
              <MdDelete size={30} className="text-red-500" />
            </button>
          </div>
          <div className="bg-green-200 w-full h-[30px] rounded-bl-lg rounded-br-lg absolute bottom-0 right-0"></div>
        </div>
      </div>
    </div>
    {show && <EditProfile setShow={setShow} user={user}/>}
    <Toaster/>
    </>
  );
};

export default UserDetailCard;
