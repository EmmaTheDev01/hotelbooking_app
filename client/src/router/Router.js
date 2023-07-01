import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Hotels from '../pages/Hotels'
import SearchResultList from '../pages/SearchResultList'
import Checkout from '../pages/Checkout'
import Tours from '../pages/Tours'
import About from '../pages/About'
import HotelDetails from '../pages/HotelDetails'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/hotel/:id' element={<HotelDetails/>} />
        <Route path='/hotel/search' element={<SearchResultList />} />
        <Route path='/checkout' element={<Checkout />} />
    
  

    </Routes>
  )
}

export default Router