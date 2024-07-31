// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify
import AuthProvider from './Components/Context/Auth.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <AuthProvider>
    <div>
        <App />
        <ToastContainer />
    </div>

    </AuthProvider>
</BrowserRouter>
);
