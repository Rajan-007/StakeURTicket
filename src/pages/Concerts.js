import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Concerts = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <h1 className='text-center text-white text-xl py-10 md:text-4xl font-bold font-sans uppercase'>Ongoing Concerts</h1>
      <div className='flex '>
        <Cards />
        <Cards />
        <Cards />
      </div>  
      <Footer />    
    </div>
  )
}

export default Concerts;
