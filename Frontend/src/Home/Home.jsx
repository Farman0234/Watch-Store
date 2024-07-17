// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Discount from '../Components/Discount'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='dark:bg-slate-900 dark:text-white '>
      <Navbar/>
      <Banner/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default Home
