import React, { useState } from 'react'

function Nav() {
    const [open,setOpen] = useState(false)
    const isOpen = () =>{
        setOpen(!open)
    }
  return (
   <div className='relative'>
    
     <div className='flex items-center lg:mx-32 my-2  w-full fixed ml-8'>
        <div className='font-bold text-5xl text-white'>icon</div>
        <div className='flex  flex-1 justify-center text-3xl font-bold text-white '>
            <div className='lg:flex hidden'>
            <p className='px-2'>Home</p>
            <p className='px-2'>chart</p>
            </div>
        </div>
        <div>
            <button className='bg-green-300 px-12 py-4 border-black border-8 lg:mr-60 mr-12'>Telegram</button>
        </div>
    <button className='absolute bg-slate-200 m-6 p-5 top-12 left-[-50px]  lg:hidden ' onClick={isOpen}>menu</button>
    <div className={`absolute h-[70vh] w-full bg-green-400 lg:hidden top-52 opacity-45 left-[-35px] transition-all ${open?'block':'translate-y-[100vh]'}`}>
       <div className='grid justify-center mt-64'>
       <p className='text-3xl font-bold'>Home</p>
       <p className='text-3xl font-bold'>chart</p>
       </div>
    </div>
    </div>
   </div>
  )
}

export default Nav