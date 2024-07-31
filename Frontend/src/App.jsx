import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Home from './Home/Home';
import Menswatch from './Mens watch/Menswatch';
import Contacts from './Mens watch/Contacts';
import Abouts from './Mens watch/Abouts';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgetPasword';
import ResetPassword from './Components/ResetPasword';
import ProductDetail from './Components/ProductDetail';
import { useAuth } from './Components/Context/Auth';

function App() {

const [authUser, setAuthUser]=useAuth()
console.log(authUser)


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5217/api/products');
        setProducts(res.data);
        setLoading(false);  
      } catch (error) {
        console.error(error);
        setLoading(false);
        console.log(fetchProducts)
      }
    };


    fetchProducts();
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menswatch" element={authUser?<Menswatch />:<Navigate to="/Login"/> } />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} loading={loading} />}
        />
        <Route path="/Contact" element={<Contacts />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route path="/About" element={<Abouts />} />
      </Routes>
  );
}

export default App;
