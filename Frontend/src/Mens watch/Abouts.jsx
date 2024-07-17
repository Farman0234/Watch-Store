// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from '../Components/Footer'   
import Navbar from '../Components/Navbar'
import About from '../Components/About'

function Abouts() {
  return (
    <div>
      <div className='dark:bg-slate-900 dark:text-white '>
    <Navbar/>
    <div className='min-h-screen'>
    <About/>
    </div>
    <Footer/>
  </div>
    </div>
  )
}

export default Abouts
