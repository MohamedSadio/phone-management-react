import React from 'react'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer' 

import { Outlet } from 'react-router-dom'

function ShopApplicationWrapper() {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ShopApplicationWrapper