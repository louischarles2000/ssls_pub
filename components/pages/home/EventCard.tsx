'use client'
import { FadeIn } from '@components/common/AnimationWrappers'
import { _shortenText } from '@utils/functions'
import { EventType } from '@utils/types'
import Link from 'next/link'
import React from 'react'

function EventCard({ event }: { event: EventType }) {
  return (
    <Link
      href={{
        pathname: '/events/' + event.title.split(' ').join('-'),
        query: {
          id: event._id
        }
      }}
      className='md:w-[30%] w-[90%] mx-auto'
      >    
      <FadeIn className='transition-all duration-200 overflow-hidden min-h-[13rem] w-full bg-white p-5 border-t-[3px] border-[#273c75] group space-y-5 cursor-pointer hover:shadow-lg hover:border-t-[0px] hover:translate-y-[-4px]'>
        <p>{event.start} {event.end === event.start ? '' : ' to ' + event.end}</p>
        <p>{event.hybrid ? 'Physical | Online' : event.isOnline ? 'Online' : 'Physical'}</p>
        <p className='font-bold group-hover:underline'>{_shortenText(event.title, 85)}</p>
        <p>Free</p>
      </FadeIn>
    </Link>
  )
}

export default EventCard