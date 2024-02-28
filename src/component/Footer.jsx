import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className='md:h-[40vh] h-[20vh]'>
     
        <div className='md:text-5xl text-2xl font-bold flex justify-center md:mt-[150px] md:block mt-[100px] md:ml-32 '>
          icon
        </div>
    
        <div className='flex md:text-3xl text-xl justify-center md:mt-11 mt-6 md:justify-start  md:ml-32 '>
        <FaFacebook className='m-2'/>
        <FaTwitter className='m-2'/>
        <FaSquareInstagram className='m-2'/>
        </div>
      <div className='h-px sm:w-[70%] md:w-[70%]  lg:w-[80%] xl:w-[90%] bg-black flex justify-center m-auto'></div>
      <p className='font-medium text-xl text-center md:text-start md:ml-32 md:text-2xl'>2024Family Token. All Rights reserved</p>
    </div>
  )
}

export default Footer