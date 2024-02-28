import React from 'react'
import img from '../assets/9.dfffbb66f86faeacf924.png'
function Home() {
  return (
    <div className='bg-zinc-800 h-screen'>
       <div className='flex justify-center items-center  flex-col'>
       <img src={img} alt="" className='h-[500px]' />
      <div className='text-3xl font-bold flex flex-col text-white text-center'>
      <p>Mission To 1 Billion</p>
       <p>Market Cap</p>
      </div>
       <button className='bg-green-500 text-3xl font-bold  px-6 py-4 border-black border-8 mt-[100px]'>Buy $FAN</button>
       </div>
    </div>
  )
}

export default Home