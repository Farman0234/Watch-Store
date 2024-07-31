import React from 'react'
import { useAuth } from './Context/Auth'
import { toast } from 'react-toastify'

function Logout() {

    const [authUser ,setAuthUser]=useAuth()
    const handleLogout =() =>{
        try{
            setAuthUser({
                ...authUser,
                user:null
                
            })
            localStorage.removeItem('token')
            toast.success('Logout successful!', {
                position: 'top-right'
            });  
            window.location.reload();
              
        }catch(error){
            toast.error("Logout failed:"+error.message, {
                position: 'top-right'
              });
        }
    }
  return (
    <div>
      <button
      className="bg-red-500 text-white px-4 py-2 rounded-xl hover-bg-slate-900 duration-300 cursor-pointer"
         onClick={handleLogout}
       >
        Logout
       </button>
    </div>
  )
}
export default Logout

















    // import React from "react";
// import { useAuth } from "./Context/Auth";

// import { toast } from 'react-toastify';

// function Logout() {
//   const [authUser, setAuthUser] = useAuth();
//   const handleLogout = () => {
//     try {
//       setAuthUser({
//         ...authUser,
//         user: null,
//       });
//       localStorage.removeItem("Users");
//       toast.success('Logout successful!', {
//         position: 'top-right'
//       });
     

//       setTimeout(() => {
//         window.location.reload();
//       }, 3000);
//     } catch (error) {
//       toast.error("Error: " + error.message,{
//             position: 'top-right'
//           });
      
      
//     }
//   };
//   return (
//     <div>
//       <button
//         className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Logout;
