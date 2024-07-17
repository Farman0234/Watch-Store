// eslint-disable-next-line no-unused-vars
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'

function Contacts() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
    <Navbar/>
    <div className='min-h-screen'>
    <Contact/>
    </div>
    <Footer/>
  </div>
  )
}

export default Contacts
