// eslint-disable-next-line no-unused-vars
import React from 'react'
import img from "./pics/Main.png" 

function Banner() {
  return (
    <>
    <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  dark:bg-slate-900 dark:text-white '>
    <div className=' order-2 md:order-1 w-full md:w-1/2 '>
        <div className='space-y-12 md:mt-32 mt-12'>
        <h1 className='text-4xl font-bold'>Hello, Welcome to my store something <span className='text-pink-500'>new everyday!!</span></h1>
       <p className='text-xl '>
       Watch, portable timepiece that has a movement driven either by spring or by electricity and that is designed to be worn or carried in the pocket
       </p>
       <label className="input input-bordered flex items-center gap-3  dark:bg-slate-700 dark:text-white ">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
       <input type="text" className="grow" placeholder="Email" />
        </label>
       </div>
        <button className="btn mt-6 btn-active btn-secondary">Subscribe</button>
    </div>
    <div className='order-1 w-full md:w-1/2'>
        <div className="md:w-96 w-full  md:mt-20 md:ml-28 mt-8 ">
        <img  src={img} alt="" />
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner;