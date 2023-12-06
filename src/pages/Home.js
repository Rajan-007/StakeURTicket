import React from 'react';
import Navbar from '../components/Navbar';
import main from '../assets/ticketroc.png'
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className='bg-gray-900'>
        <Navbar />
        <div>
        <div>
        <div>
          <h1 className='font-bold w-[60%] text-center text-6xl  pt-20  text-yellow-400 '>Welcome to Stake<span className='text-white underline'>UR</span>Ticket </h1>
        </div>
        <div className='flex justify-around mt-12 items-center'> 
          <div className='  '>   
              <h2 className='font-bold text-6xl text-center mt-8 text-white tracking-wide	 '> Your Premier </h2>
              <h2 className='font-bold text-6xl text-center pt-2 text-white w-full flex-1'>Ticket Booking Platform</h2>
          
              <h4 className='text-white text-center mt-8 font-semibold text-4xl'>
              Stake Your Seat, Find Your Beat !!!              </h4>
          </div>
        <div className='md:flex md:justify-center'>
            <img className='h-80 pl-5' src={main} alt="main" />
        </div>

        </div>
        <div className='text-center mt-10'>
          <a href='/Concerts' className='bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 font-bold text-2xl rounded-full py-4 px-10 border-2 border-white'>Book now</a>
        </div>
            <p className='text-white mt-20 mx-28 flex justify-center flex-1 text-xl text-center pb-16'>
              At StakeUrTicket, we believe in the power of experiences. We bring people together to celebrate, learn, and be entertained through a vast array of events hosted by passionate individuals just like you. Whether you're an event organizer or someone seeking a memorable time, StakeUrTicket is your go-to destination for a world of experiences. Browse events, book tickets, and create unforgettable memories with us.
            </p>
        </div>
        </div>
        <Footer />
    </div>
  )
}


export default Home;
