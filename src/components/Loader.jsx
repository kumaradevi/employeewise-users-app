import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center '>
    <div className='flex gap-2'>
      <span className='bg-blue-500 w-[10px] h-[10px] rounded-full animate-bounce duration-75'></span>
      <span className='bg-blue-400  w-[10px] h-[10px] rounded-full animate-bounce delay-75 duration-75'></span>
      <span className='bg-blue-500  w-[10px] h-[10px] rounded-full animate-bounce delay-100 duration-75'></span>

    </div>
    </div>
  )
}

export default Loader