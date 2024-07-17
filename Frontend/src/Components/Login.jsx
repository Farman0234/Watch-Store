// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
function Login() {

    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
 // watch input value by passing the name of it
  
  return (
    <>
    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <div className="hero bg-base-200 min-h-screen dark:bg-slate-900 dark:text-white ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login Now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input type="email" placeholder="Enter your Email" className="input input-bordered"  {...register("email", { required: true })}/>
            {errors.email && <span className='text-sm text-red-700 mt-2'>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input type="password" placeholder="Enter Your Password" className="input input-bordered"  {...register("password", { required: true })}/>
            {errors.password && <span className='text-sm text-red-700 mt-2'>This field is required</span>}
            <label className="label">
              <Link to="" href="#" className="label-text-alt link link-hover font-bold text-blue-800 underline mt-3">Forgot password?</Link>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary">LOGIN</button>
          </div>
          <div>
          <div className='mt-8 flex justify-center items-center dark:text-black '>
                    <p className='font-medium text-base mx-3'>Don't have an account?</p>
                    <Link to="/Signup"
                        className='ml-2 font-medium text-base text-violet-500'>Sign Up</Link>
                </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}

export default Login
