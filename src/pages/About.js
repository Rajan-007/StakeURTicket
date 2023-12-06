import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>

    <div className='bg-gray-900 text-white'>
        <Navbar />
        <div>
          <h1 className='font-bold text-6xl py-5 flex justify-center md:flex md:justify-center md:py-8 text-yellow-300 underline'>Our Story</h1>
        </div>
        <div className='text-center mx-28 font-semibold px-4 md:text-2xl md:px-6'>
          <p> <span className='text-4xl font-bold block pb-8 text-yellow-400' >Welcome to StakeUrTicket </span> where we're revolutionizing the concert ticketing experience through blockchain technology. At StakeurTicket, we believe that every musical journey deserves a seat worth remembering, and our NFT ticketing system is here to make it happen.</p>
        </div>
        <div>
          <h1 className='text-center text-2xl my-3 mx-28 px-4 py-5 '> <span className='font-bold text-3xl text-yellow-400'>Our Mission:</span> We're on a mission to redefine how fans engage with live music events. By combining the power of blockchain and NFTs, we aim to provide a seamless and secure ticketing solution that not only grants access to unforgettable concerts but also allows fans to stake their experience in a way that's never been possible before.</h1>
        </div>
        <div>
          <h1 className='text-center my-4 mx-28 px-5 text-2xl pb-20 '> <span className='font-bold text-3xl text-yellow-400'>Easy Booking:</span>We've designed a user-friendly platform that simplifies the ticket booking process,
           making it easy for you to discover and secure your spot at incredible events.</h1>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
