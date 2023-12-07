import React from 'react'
import Tickets from '../components/Tickets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Concerts = () => {
  return (
    <div className='bg-gray-900 min-h-screen h-full  '>
      <Navbar />
      <div className='min:h-4/5 h-full '>
      <h1 className='text-center text-white underline text-xl py-10 md:text-4xl font-bold font-sans uppercase'>Collections</h1>
        <div className='flex flex-col py-5'>
          <Tickets  />
          
        </div>  
      </div>
      <Footer />    
    </div>
  )
}

export default Concerts; 