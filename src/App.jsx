import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import Join from './component/Join'
import Footer from './component/Footer'

function App() {
  return (
    <div className='w-full'>
      <Nav/>
      <Home/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default App