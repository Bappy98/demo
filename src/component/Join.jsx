import React from 'react'

function Join() {
  return (
    <div className='h-[40vh] bg-zinc-500 flex justify-center items-center flex-col md:flex-row md:justify-evenly'>
        <div className='font-bold text-6xl text-white align-middle flex flex-col text-center  lg:text-9xl lg:flex-col'>
            <span>Join The</span>
            <span>Family</span>
        </div>
        <div className='border-black  rounded-full group hover:outline  mt-6'>
        <button className='font-bold text-3xl bg-white px-14 py-4  rounded-full group-hover:scale-90   '>Join Now</button>
        </div>
    </div>
  )
}

export default Join