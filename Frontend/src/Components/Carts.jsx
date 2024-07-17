/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Carts({ item })
{
  return (
    <>
    <div className='mt-7 my-3' >
    <div className="card w-92 bg-base-90 ml-4 mr-2 shadow-xl md:hover:scale-105 duration-200 cursor-pointer hover:scale-105 duration-200 cursor-pointer  dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div> 
      <Link to="/Product"><div className="badge badge-outline cursor-pointer py-3 px-2 hover:bg-pink-500 duration-200 hover:text-white ">Buy Now</div></Link>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  );
}

export default Carts;
