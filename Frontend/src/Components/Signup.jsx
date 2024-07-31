import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5217/user/signup', data);
      console.log('Signup response:', res);

      const { message } = res.data; // Extract message from response data

      // localStorage.setItem('token', res.data.token);
      toast.success(message, {
        position: 'top-right'
      });
      setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      const message = error.response?.data?.message || 'Signup failed. Please try again.';
      if (message === 'User already exists') {
        toast.error('User already exists with this email!', {
          position: 'top-right'
        });
      } else {
        toast.error(message, {
          position: 'top-right'
        });
      }
    }
  };

  return (
    <>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <div className="hero bg-base-200 min-h-screen dark:bg-slate-900 dark:text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup Now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className='text-sm text-red-700 mt-2'>{errors.name.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className='text-sm text-red-700 mt-2'>{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className='text-sm text-red-700 mt-2'>{errors.password.message}</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SIGN UP</button>
              </div>
              <div className='mt-8 flex justify-center items-center dark:text-black'>
                <p className='font-medium text-base mx-3'>Do you have an account?</p>
                <Link to="/login" className='ml-2 font-medium text-base text-violet-500'>Login Now</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
