import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5217/user/forgot-password', { email });
      setMessage(response.data.message);
      toast.success(response.data.message, {
        position: 'top-right'
      });
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setMessage(errorMessage);
      toast.error(`Error: ${errorMessage}`, {
        position: 'top-right'
      });
    }
  };

  return (
    <>
    <Link to="/Login" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <div className="hero bg-base-200 min-h-screen dark:bg-slate-900 dark:text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Send Password Reset Link</button>
            </div>
            {message && <p className="mt-4 text-center">{message}</p>}
            
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;
