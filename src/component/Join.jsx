import React from 'react'

function Join() {
  return (
    <div className='md:h-[40vh] h-[20vh] bg-zinc-500 flex justify-center items-center flex-col md:flex-row md:justify-evenly'>
        <div className='font-bold md:text-6xl text-2xl text-white align-middle flex flex-col text-center  lg:text-9xl lg:flex-col'>
            <span>Join The</span>
            <span>Family</span>
        </div>
        <div className='border-black  rounded-full group hover:outline  mt-6'>
        <button className='font-bold md:text-3xl text-xl bg-white px-6 md:px-14 md:py-4 py-1  rounded-full group-hover:scale-90'>Join Now</button>
        </div>
    </div>
  )
}

export default Join