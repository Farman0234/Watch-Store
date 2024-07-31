import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting password reset with token:', token);
    console.log('New password:', password);
    
    try {
        const response = await axios.post(`http://localhost:5217/user/reset-password/${token}`, { password });
        console.log('Response:', response.data);
        setMessage(response.data.message);
        toast.success(response.data.message, {
            position: 'top-right'
        });
    } catch (error) {
        console.error('Reset Password Error:', error.response?.data || error.message);
        const errorMessage = error.response?.data?.message || error.message;
        setMessage(errorMessage);
        toast.error(`Error: ${errorMessage}`, {
            position: 'top-right'
        });
    }
};

  return (
    <div className="hero bg-base-200 min-h-screen dark:bg-slate-900 dark:text-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">New Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Reset Password</button>
            </div>
            {message && <p className="mt-4 text-center">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
