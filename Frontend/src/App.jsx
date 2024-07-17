// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Menswatch from './Mens watch/Menswatch'
import Contacts from './Mens watch/Contacts'

import Abouts from './Mens watch/Abouts'
import Products from './Product/Products'
import Signup from './Components/Signup'
import Login from './Components/Login'
// import Logins from './Product/Logins'



function App() {
  return (
    <>
    {/* <Home/>
    <Menswatch/> */}
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/menswatch" element={<Menswatch/>}/>
      <Route path="/Product" element={<Products/>}/>
      <Route path="/Contact" element={<Contacts/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/About" element={<Abouts/>}/>
  </Routes>

    </>
  )
}
export default App
