import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DOMAINFINDER from '../pages/home/Home'
import About from '../pages/about/About'
import NotFound from '../pages/NotFound'
import Developer from '../pages/developer/Developer'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<DOMAINFINDER />} />
        <Route path='/about' element = {<About />} />
        <Route path='/developers' element = {<Developer />} />
        <Route path='*' element = {<NotFound />} />
    </Routes>
  )
}

export default MyRoutes