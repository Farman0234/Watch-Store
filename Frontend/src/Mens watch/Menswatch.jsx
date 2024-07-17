// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Watches from '../Components/Watches'
function Menswatch() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <Navbar/>
      <div className='min-h-screen'>
      <Watches/>
      </div>
      <Footer/>
    </div>
  )
}

export default Menswatch
