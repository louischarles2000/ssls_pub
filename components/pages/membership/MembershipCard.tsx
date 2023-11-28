import { FadeIn } from '@components/common/AnimationWrappers'
import { _shortenText } from '@utils/functions'
import { BasicCardProps, EventType, PostType } from '@utils/types'
import React from 'react'
import Image from 'next/image'
import SeeMoreBtn from '@components/common/SeeMoreBtn'

function MembershipCard({ title, description, image }: BasicCardProps) {
  return (
    <FadeIn className='transition-all duration-200 pt-0 overflow-hidden min-h-[13rem] md:w-[30%] w-[90%] mx-auto border-t-[3px] border-[#273c75] group space-y-0 cursor-pointer hover:shadow-lg hover:border-t-[0px] hover:translate-y-[-4px]'>
      <div className='w-full h-[13rem]'>
        <Image
          src={image} 
          height={300} 
          width={600} 
          className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up bg-blue-gray-50"
          alt='img'
          />
      </div>
      <div className='bg-orange-50 h-full p-5 space-y-3'>
        <p className='font-bold group-hover:underline'>{_shortenText(title, 75)}</p>
        <p>{_shortenText(description, 120)}</p>
        <SeeMoreBtn text='Know More' />
      </div>
    </FadeIn>
  )
}

export default MembershipCard