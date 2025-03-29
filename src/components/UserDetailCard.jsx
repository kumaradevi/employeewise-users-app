import axios from "axios";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

const UserDetailCard = ({ user }) => {
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure to delete user?");
    if (!confirm) {
      return;
    }
    if (!token) {
      navigate("/login");
    }
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Deleted Successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error(err.message);
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <div className="bg-amber-50  shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-2xl p-7 flex flex-col gap-6 relative">
         
          <div className="bg-amber-300 w-full h-[120px] sm:h-[150px] rounded-lg"></div>

          
          <div className="absolute top-[60px] sm:top-[80px] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px] rounded-full border-4 border-white">
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          
          <div className="flex flex-col items-center mt-16 sm:mt-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">
              {user?.first_name} {user?.last_name}
            </h2>
            <p className="mt-2 text-sm sm:text-base ">{user?.email}</p>
          </div>

          
          <div className="flex justify-center gap-4 my-4">
            <button onClick={() => setShow(true)} className="hover:scale-110 transition">
              <FaEdit size={25} className="hover:text-blue-500 cursor-pointer" />
            </button>
            <button onClick={() => handleDelete(user.id)} className="hover:scale-110 transition">
              <MdDelete size={25} className="hover:text-red-500 cursor-pointer" />
            </button>
          </div>

         
          <div className="bg-amber-200 w-full h-[30px] rounded-bl-lg rounded-br-lg absolute bottom-0 right-0"></div>
        </div>
      </div>

      
      {show && <EditProfile setShow={setShow} user={user} />}
      <Toaster />
    </>
  );
};

export default UserDetailCard;



// import axios from "axios";
// import React, { useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import EditProfile from "./EditProfile";
// import { useSelector } from "react-redux";
// import { Toaster,toast } from "react-hot-toast";


// const UserDetailCard = ({ user }) => {
//   const [show,setShow]=useState(false);
//   const token=useSelector(state=>state.auth.token)
//   const navigate=useNavigate()

//   const handleDelete = async (id) => {
//     const confirm=window.confirm("Are you sure to delete user?");
//     if(!confirm){
//         return
//     }
//     if(!token){
//     navigate('/login')
//     }
//     try {
//       const res = await axios.delete(`https://reqres.in/api/users/${id}`,{
//         headers:{
//           Authorization:
//             `Bearer ${token}`
          
//         }
//       });
//       toast.success("deleted Successfully");
//       setTimeout(() => {
//         navigate('/')
//       }, 2000);
//     } catch (err) {
//       toast.error(err.message)
//       console.error(err.message);
//     }
//   };
//   const handleEdit = (id) => {
//     setShow(true)
//   };

//   return (
//     <>
//     <div className="flex justify-center items-center">
//       <div className="bg-white shadow-md w-[40%] h-[480px] rounded-2xl p-7 flex flex-col  gap-6 relative">
//         <div className="bg-green-200 w-full h-[40%] rounded-lg"></div>
//         <div className="absolute top-20 right-[230px] w-[150px] h-[150px] rounded-full">
//           <img
//             src={user?.avatar}
//             alt="avatar"
//             className="w-[100%] h-full object-cover rounded-full"
//           />
//         </div>

//         <div className="flex flex-col items-canter mt-8 items-center">
//           <h2 className="text-4xl font-medium">
//             {user?.first_name} {user?.last_name}
//           </h2>
//           <p className="mt-2">{user?.email}</p>
//         </div>
//         <div>
//           <div className="absolute right-10 flex gap-3">
//             <button onClick={() => handleEdit(user.id)}>
//               <FaEdit size={30} className="text-blue-500" />
//             </button>
//             <button onClick={() => handleDelete(user.id)}>
//               <MdDelete size={30} className="text-red-500" />
//             </button>
//           </div>
//           <div className="bg-green-200 w-full h-[30px] rounded-bl-lg rounded-br-lg absolute bottom-0 right-0"></div>
//         </div>
//       </div>
//     </div>
//     {show && <EditProfile setShow={setShow} user={user}/>}
//     <Toaster/>
//     </>
//   );
// };

// export default UserDetailCard;
