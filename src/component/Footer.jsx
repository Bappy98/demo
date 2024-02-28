import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className='h-[40vh] '>
     
        <div className='text-5xl font-bold flex justify-center mt-[150px] md:block md:ml-32'>
          icon
        </div>
    
        <div className='flex text-3xl justify-center mt-11 md:justify-start  md:ml-32 '>
        <FaFacebook className='m-2'/>
        <FaTwitter className='m-2'/>
        <FaSquareInstagram className='m-2'/>
        </div>
      <div className='h-px w-[90%] bg-black left-0 right-0 m-auto'></div>
      <p className='font-medium text-2xl text-center md:text-start md:ml-32 md:text-2xl'>2024Family Token. All Rights reserved</p>
    </div>
  )
}

export default Footer