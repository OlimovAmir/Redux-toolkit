import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'

function AppRoutes() {
  return (
    <Routes>
           <Route exact path="/" element={<Home/>} />
      </Routes>
  )
}

export default AppRoutes