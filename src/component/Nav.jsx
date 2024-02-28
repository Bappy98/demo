import React, { useState } from 'react'

function Nav() {
    const [open,setOpen] = useState(false)
    const isOpen = () =>{
        setOpen(!open)
    }
  return (
   <div className='relative '>
    
     <div className='flex items-center lg:mx-32 my-2  w-full fixed ml-8'>
        <div className='font-bold md:text-5xl text-white text-xl sm:text-2xl'>icon</div>
        <div className='flex  flex-1 justify-center text-3xl font-bold text-white '>
            <div className='lg:flex hidden'>
            <p className='px-2'>Home</p>
            <p className='px-2'>chart</p>
            </div>
        </div>
        <div>
            <button className='bg-green-300 px-2 lg:px-8 md:py-4 py-2 border-black md:border-8 border-2 lg:mr-60 mr-12 sm:text-xl sm:font-bold'>Telegram</button>
        </div>
    <button className='absolute bg-slate-200 md:m-6 md:p-5 top-12 md:left-[-50px]  lg:hidden p-2 sm:font-bold sm:text-xl z-50' onClick={isOpen}>menu</button>
    <div className={`fixed top-0 left-0 w-full h-full ${open&&'bg-black'}  bg-opacity-75`}>

    </div>

    <div className={`absolute h-[70vh] w-full bg-white text-black lg:hidden top-52 opacity-45 left-[-35px] transition-all ${open?'block':'translate-y-[100vh]'}`}>
       <div className='grid justify-center mt-64 '>
       <p className='text-3xl font-bold'>Home</p>
       <p className='text-3xl font-bold'>chart</p>
       </div>
    </div>
    </div>
   </div>
  )
}

export default Nav