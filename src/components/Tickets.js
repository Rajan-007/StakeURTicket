import React from 'react'
import main from '../assets/Ticket.jpg'

function Tickets() {
  return (
    <div className='flex flex-col my-5 mx-60'>
      <img src={main} alt='Your NFT Ticket' className=' h-80 w-[12rem]' />
    </div>
  )
}

export default Tickets
