'use client'
import { FadeIn } from '@components/common/AnimationWrappers'
import SeeMoreBtn from '@components/common/SeeMoreBtn'
import { _programs } from '@utils/data'
import { _shortenText } from '@utils/functions'
import { ProgramType } from '@utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Programs() {
  const [ prog, setProg ] = useState<ProgramType>(_programs[0])
  const refLink = React.useRef<HTMLAnchorElement | null>(null);

  const handleLinkClick = () => {
    // console.log('Clicked')
    if(!refLink.current) return;
    refLink.current.click();
  }

  return (
    <div className='mt-[0rem] lg:px-[5rem] px-6 bg-blue-gray-50 py-[3rem] '>
      <Link href={{
          pathname: '/programs/' + _programs[0].title.split(' ').join('-'),
          query: {
            id: _programs[0]._id
          }
        }}
        ref={refLink}
        className='hidden'
      />
      <div className='md:flex items-center justify-between mb-4'>
        <h2 className='font-bold text-[20px] mb-8 md:text-left text-center'>— Our Programs —</h2>
        <SeeMoreBtn text='See All Programs'/>
      </div>
      {/*  */}
      <FadeIn className='flex shadow-sm group'>
        {_programs[0].image &&
        <div className='md:block hidden w-[40%] h-[25rem]'>
          <Image
            src={_programs[0].image} 
            height={500} 
            width={1000} 
            className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </div>}
        <div className=' flex-1 bg-white md:p-8 p-5 text-[20px] space-y-6'>
          <p className='font-bold mt-6'>{_programs[0].title}</p>
          <p>{_shortenText(_programs[0].content[0].text, 150)}</p> 
          <Link href={{
            pathname: '/programs/' + _programs[0].title.split(' ').join('-'),
            query: {
              id: _programs[0]._id
            }
          }}
          ref={refLink}
          >
            <SeeMoreBtn text='Read more'/>
          </Link>
        </div>
      </FadeIn>
      <p className='mt-8 font-bold'>Other Programs</p>
      <div className='md:flex gap-5'>
        {_programs.map((program, i) => (
          <FadeIn className='md:min-w-[33%] flex-1 bg-white p-5 text-[20px] space-y-6 mt-5 shadow-sm' key={i}>
            <p className='font-bold mt-6'>{program.title}</p>
            <p>{_shortenText(program.content[0].text, 150)}</p> 
            <Link href={{
              pathname: '/programs/' + program.title.split(' ').join('-'),
              query: {
                id: program._id
              }
            }}
            ref={refLink}
            >
              <SeeMoreBtn text='Read more'/>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

export default Programs