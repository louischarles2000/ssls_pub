'use client'
import { Button } from '@components/MUI';
import Divider from '@components/common/Divider';
import MainButton from '@components/common/MainButton';
import { events } from '@utils/data';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import React from 'react'

function EventDetailsScreen() {
  const params = useSearchParams();
  const id = params.get('id');
  const event = events.find(ev => ev._id === id);
  
  if(!event){
    return (
      <div className='my-[8rem] text-center text-[30rem]'>
        <p>Event not found!</p>
      </div>
    )
  }
  return (
    <div className='lg:p-[8rem] md:p-8 pt-8 px-5 pb-8'>
      <div className='p-8 border-[1px] bg-[#3498db] bg-opacity-10 space-y-5 border-t-[5px] border-[#273c75]'>
        <p className='uppercase'>{event.hybrid ? 'Physical | Online' : event.isOnline ? 'Online' : 'Physical'}</p>
        <h1 className='font-bold md:text-[30px] text-[25px]'>{event.title}</h1>
        <div className='md:flex gap-3'>
          <div className='md:w-[50%] space-y-4'>
            <div className='md:flex md:items-center gap-6 md:space-y-0 space-y-3'>
              <div className='flex items-center gap-3'>
                <Image src={'/icons/calendar.svg'} height={20} width={20} alt='icon'/>
                {event.start} to {event.end}
              </div>
              <div className='flex items-center gap-3 space-y-3'>
                <Image src={'/icons/time.svg'} height={20} width={20} alt='icon'/>
                8:30 AM - 11:00 AM
              </div>
            </div>
            <p className='text-[18px]'>
              We will dissect the pivotal changes in KYC and AML regulations that took place in 2023 and provide insights to anticipate and adapt to the regulatory shifts set to take place for the year ahead.
            </p>
          </div>
          <div className='md:hidden'>
            <Divider />
          </div>
          <div className='flex-1 md:border-l-[1px] md:p-4 border-[#ccc] space-y-3'>
            <p>Event Fee</p>
            <p className='text-[25px] font-bold text-[#1abc9c]'>FREE</p>
            
            <Button
              className='rounded-none w-full shadow-none hover:shadow-none hover:underline bg-[#192a56] hover:bg-black'
              >
              BOOK NOW
            </Button>

            <Button
              className='rounded-none w-full border-[1px] border-black shadow-none text-[black] hover:shadow-none hover:underline bg-white '
              >
              SIGN IN TO CONTINUE
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default EventDetailsScreen