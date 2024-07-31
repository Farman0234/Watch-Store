import React from 'react'
import Navbar from '../Components/Navbar'
import Product from '../Components/ProductDetail'
import Footer from '../Components/Footer'
function Products() {
  return (     
      <div className='dark:bg-slate-900 dark:text-white '>
    <Navbar/>
    <div className='min-h-screen'>
    <Product/>
    </div>
    <Footer/>
  </div>
  )
}

export default Products
