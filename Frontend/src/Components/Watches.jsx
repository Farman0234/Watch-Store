import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carts from './Carts';
import img from './Accet/pics/Sale.webp';
import { Link } from 'react-router-dom';

function Watches() {
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    const getWatch = async () => {
      try {
        const res = await axios.get('http://localhost:5217/get');
        console.log(res.data);
        setWatch(res.data.filter((data) => data.category === "Best Offer"));
      } catch (error) {
        console.log(error);
      }
    };
    getWatch();
  }, []);

  return (
    <div className='mx-w-screen mx-4 md:mx-auto md:px-8 py-1 dark:bg-gray-900 dark:text-white'>
      <Link to="/">
        <div className='mt-20 w-92 bg-base-200 shadow-xl order-1'>
          <img src={img} alt="" />
        </div>
      </Link>
      <div className='mt-16 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          MENS WATCHES <span className='text-pink-500'>Enjoy your Shopping 🥳</span>
        </h1>
        <p className='mt-12 justify-center order-2 md:mx-auto'>
          Discover the epitome of sophistication with our premium men's watch collection. Each timepiece is meticulously crafted to blend timeless elegance with modern innovation. Featuring a sleek stainless steel case, durable sapphire crystal, and a meticulously detailed dial, our watches are designed for the discerning gentleman.
        </p>
      </div>
      <div className='container mt-12 mr-8 grid grid-cols-1 md:grid-cols-3'>
        {watch.map((data) => (
          <Carts item={data} key={data._id} />
        ))}
      </div>
    </div>
  );
}

export default Watches;



























































// /* eslint-disable react/no-unescaped-entities */
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react'

// // import list from './pics/watch.json';

// import Carts from './Carts'

// import img from './pics/Sale.webp';

// import { Link } from 'react-router-dom';

// import axios from 'axios';

// function Watches() {

//   //Backend Integration
 
//   const [watch,setWatch]=useState([])
//   useEffect(()=>{
//     const getWatch= async()=>{
//       try{
//         const res = await axios.get('http://localhost:5217/get', {
//           headers: {
//               'x-access-token': localStorage.getItem('token')
//           }
//       });
//        console.log(res.data)
//        setWatch(res.data.filter((data) => data.category === "Best Offer"))
//       }catch (error){
//         console.log(error);
//       }
//     }
//     getWatch();
//   },[]);



//   // const filterData = list.filter((data) => data.category === "Best Offer")
//   return (
//     <>
//     <div className='mx-w-screen mx-4 md:mx-auto md:px-8 py-1 dark:bg-gray-900 dark:text-white '>
//     <Link to="/">
//           <div className='mt-20 w-92 bg-base-200 shadow-xl order-1'>
//             <img src ={img} alt="" />
//           </div>
//           </Link>
//       <div className='mt-16 item-center justify-center text-center'>
//           <h1 className='text-2xl md:text-4xl'>
//           MENS WATCHES {""}<span className='text-pink-500'>Enjoy your Shopping 🥳</span>
//           </h1>
//           <p className='mt-12 justify-center order-2 md:mx-auto'>
//           Discover the epitome of sophistication with our premium men's watch collection. Each timepiece is meticulously crafted to blend timeless elegance with modern innovation. Featuring a sleek stainless steel case, durable sapphire crystal, and a meticulously detailed dial, our watches are designed for the discerning gentleman.
//           </p>
//       </div>
      
//       <div className=' container mt-12 mr-8 grid grid-cols-1 md:grid-cols-3'>
//       {
//           watch.map((data) => (     
//             <Carts item={data} key={data.id} />
//           ))}
      
//       </div>     
//     </div>
//     </>
//   )
// }
// export default Watches;