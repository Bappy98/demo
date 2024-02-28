import React from 'react'
import img from '../assets/9.dfffbb66f86faeacf924.png'
function Home() {
  return (
    <div className='bg-zinc-800 h-screen'>
       <div className='flex justify-center items-center  flex-col'>
       <img src={img} alt="" className='md:h-[400px] md:w-[600px] h-[200px] w-[200px]  sm:h-[350px] sm:w-[400px] md:mt-[50px]  mt-[200px] lg:mt-[200px] ' />
      <div className='md:text-3xl text-xl font-bold flex flex-col text-white text-center mt-4 sm:mt-0'>
      <p>Mission To 1 Billion</p>
       <p>Market Cap</p>
      </div>
       <button className='bg-green-500 md:text-3xl text-xl font-bold px-3 md:px-6 md:py-4 py-2 border-black md:border-8 border-4 mt-[70px]mb-12 sm:mb-10 sm:mt-12 mb-5 lg:mb-[30px] mt-16'>Buy $FAN</button>
       </div>
    </div>
  )
}

export default Home