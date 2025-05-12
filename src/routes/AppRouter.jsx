import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Test from '../pages/Test'


const AppRouter = () => {
  return (
    <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
    </Routes>
  )
}

export default AppRouter