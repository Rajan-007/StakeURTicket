import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-400 text-black drop-shadow-lg '>
        <div className=''>
          <div className='md:flex md:justify-center gap-20  text-xl md:pt-8 pb-5 font-bold font-sans px-10'>
            <a className='block' href='/'>Home</a>
            <a className='block' href='/About'> About</a>
            <a className='block' href='/Concerts'>Concerts</a>
            <a className='block' href='/Collections'>Collections</a>
          </div>
        </div>
        <h1 className='md:flex md:justify-center flex justify-end pr-5 pb-5 text-gray-800'>Copyright © 2023 Stake<span>UR</span>Ticket</h1>
      </div>
    </div>
  )
}

export default Footer;