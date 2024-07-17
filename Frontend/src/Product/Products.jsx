import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Product from '../Components/Product'

function Products() {
  return (
    <div>
       <div>
      <div className='dark:bg-slate-900 dark:text-white '>
    <Navbar/>
    <div className='min-h-screen'>
    <Product/>
    </div>
    <Footer/>
  </div>
    </div>
    </div>
  )
}

export default Products
