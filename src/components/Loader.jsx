import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center '>
    <div className='flex gap-2'>
      <span className='bg-blue-500 w-[10px] h-[10px] rounded-full animate-bounce [animation-delay:0.1s]'></span>
      <span className='bg-blue-400  w-[10px] h-[10px] rounded-full animate-bounce [animation-delay:0.2s]'></span>
      <span className='bg-blue-500  w-[10px] h-[10px] rounded-full animate-bounce [animation-delay:0.3s]'></span>

    </div>
    </div>
  )
}

export default Loader