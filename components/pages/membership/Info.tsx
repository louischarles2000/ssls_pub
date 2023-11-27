import { FadeIn } from '@components/common/AnimationWrappers'
import { _membership_info } from '@utils/data'
import React from 'react'
import MembershipCard from './MembershipCard'
import Image from 'next/image'
import { _shortenText } from '@utils/functions'
import SeeMoreBtn from '@components/common/SeeMoreBtn'

function Info() {
  return (
    <div className='my-[2rem] lg:px-[5rem] px-6 bg-white py-[3rem] '>
      <FadeIn className='w-full'>
        <div className='md:flex items-center justify-between mb-0'>
          <h2 className='font-bold text-[20px] mb-8 md:text-left text-center'>— Stay up to date —</h2>
          <div></div>
        </div>
      </FadeIn>
      <p className='text-[18px]'>Stay up to date, connect with fellow solicitors and build expertise in your practice area. </p>

      {/* List */}
      <div className='my-[3rem] flex flex-wrap justify-start gap-5'>
        {_membership_info.map((info, index) => (
          <MembershipCard key={index} {...info}/>
        ))}
      </div>
      <FadeIn className='md:flex md:h-[16rem] mb-[2rem]'>
        <div className='md:w-[50%] md:h-full h-[15rem]'>
          <Image
            src={'/images/freshers.jpg'} 
            height={500} 
            width={1000} 
            className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </div>
        <div className='bg-blue-50 h-full p-5 flex-1 space-y-3'>
          <p className='font-bold group-hover:underline text-[20px]'>Junior solicitors</p>
          <p className=' text-[20px]'>{_shortenText(`
            Being a solicitor is a rewarding and stimulating experience. Explore a range of resources and services that can help you thrive and prosper throughout your career.
          `, 200)}</p>
          <SeeMoreBtn text='Join the Juniors Network' />
        </div>
      </FadeIn>
      
      <FadeIn className='md:flex md:h-[16rem] mb-[2rem]'>
        <div className='bg-blue-50 h-full p-5 flex-1 space-y-3'>
          <p className='font-bold group-hover:underline text-[20px]'>Strategic Growth</p>
          <p className=' text-[20px]'>{_shortenText(`
          Growing your law firm with the South Sudan Law Society (SSLS) membership can be a strategic and beneficial move. Joining the SSLS offers a range of advantages that can positively impact the growth and success of your law practice. Here's a narrative on how you can leverage SSLS membership for the expansion of your law firm
          `, 200)}</p>
          <SeeMoreBtn text='Join the Firm growth network' />
        </div>
        <div className='md:w-[50%] md:h-full h-[15rem]'>
          <Image
            src={'/images/firm.jpg'} 
            height={500} 
            width={1000} 
            className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </div>
      </FadeIn>
    </div>
  )
}

export default Info