import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import { ROUTES } from '../../utils/routes'
import SingleProducts from '../products/SingleProducts'




function AppRoutes() {
  return (
    <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route path={ROUTES.PRODUCT} element={<SingleProducts/>}/>
      </Routes>
  )
}

export default AppRoutes