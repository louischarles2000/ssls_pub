import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@components/common/AnimationWrappers'
import { EventType } from '@utils/types'
import EventCard from './EventCard'
import SeeMoreBtn from '@components/common/SeeMoreBtn'
import { events } from '@utils/data'

function Upcoming() {
 
  return (
    <div className='mt-[0rem] lg:px-[5rem] bg-blue-gray-50 py-[3rem] '>
      <FadeIn className='w-full px-5'>
        <div className='md:flex items-center justify-between mb-4'>
          <h2 className='font-bold text-[20px] mb-8 md:text-left text-center'>— Upcoming Events —</h2>
          <SeeMoreBtn text='See More Events'/>
        </div>
      </FadeIn>
      <div className='my-[4rem] md:flex flex-wrap justify-evenly gap-5 md:space-y-0 space-y-5 items-center'>
        {events.map(event => (
          <EventCard event={event} key={event._id}/>
        ))}
      </div>
    </div>
  )
}

export default Upcoming