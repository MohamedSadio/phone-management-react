import React from 'react'
import PhoneHeroImgage from './../../assets/images/PhoneHeroImage2.jpg'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover bg-center text-left w-full h-280px' style={{
      backgroundImage: `url(${PhoneHeroImgage})`,
      height: 'calc(100vh - 80px)' // Ajustez selon la hauteur de votre navbar
    }}>
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>
      <div className='container mx-auto px-6 lg:px-16 z-10'>
        <div className='max-w-lg'>
          <h2 className='text-xl md:text-2xl text-white font-medium'>Full brands</h2>
          <h1 className='mt-2 text-4xl md:text-6xl text-white font-bold leading-tight'>
            Summer<br />Value Pack
          </h1>
          
          <button className='mt-6 py-3 px-8 border rounded border-black hover:bg-white hover:text-black hover:border-black text-white bg-black transition duration-300'>
            <NavLink to="/allPhones">Check now</NavLink> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection