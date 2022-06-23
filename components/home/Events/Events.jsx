import React from 'react'
import EventsCard from './EventsCard';

const Events = () => {
  return (
    <div>
        <div className='mt-[64px]'>
          <h5 className='font-montserrat text-h5 text-text-gray text-center'>EVENTS</h5>
          <h2 className='font-montserrat text-h2 font-black text-center mt-[25px] mb-[60px]'>Upcoming Community Events</h2>
        </div>

        <div className='bg-green flex flex-col'>
          <div className='text-right mr-[204px] mt-[25px] mb-[47px]'>
            <h4 className='font-montserrat text-h4 text-white font-bold'>See more</h4>
          </div>
          <div className='grid mr-[204px] ml-[181px]'>
            <EventsCard />
          </div>
        </div>
    </div>
  )
}

export default Events;