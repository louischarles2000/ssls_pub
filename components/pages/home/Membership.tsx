import { FadeIn } from '@components/common/AnimationWrappers'
import React from 'react'
import Image from 'next/image'
import { Button } from '@components/MUI'
import Link from 'next/link'
import MainButton from '@components/common/MainButton'

function Membership() {
  const reasons = [
    {
      title: 'Networking Opportunities',
      description: '',
      image: ''
    }
  ]
  return (
    <div className=' lg:px-[5rem] py-[3rem] '>
      <FadeIn>
        <h2 className='font-bold text-[20px] mb-8 text-center'>— Why should you become a member? —</h2>
      </FadeIn>
      <div className='flex gap-6 justify-evenly lg:px-[5rem] items-center'>
        <FadeIn className='lg:w-[35%] md:block hidden h-auto'>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/lawyers_1.jpg?alt=media&token=86247adc-ab57-4084-8f93-cd0daaaf0c5e'} 
            height={500} 
            width={1000} 
            className="h-auto lg:w-full w-[50%] mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </FadeIn>
        <FadeIn className='md:w-[40%] w-[80%] md:mx-0 mx-auto'>
          <p className='font-bold text-[18px] mb-8 text-[#555]'>Networking Opportunities</p>
          
          <p className='mb-5'>Connect with other legal professionals, including experienced lawyers, judges, and law students. </p>
          <p>Attend networking events, conferences, and seminars to expand professional contacts.</p>
        </FadeIn>        
      </div>
      
      <div className='flex gap-6 justify-evenly lg:px-[5rem] items-center my-[3rem]'>
        <FadeIn className='md:w-[40%] w-[80%] md:mx-0 mx-auto'>
          <p className='font-bold text-[18px] mb-8 text-[#555]'>Career Opportunities:</p>
          
          <p className='mb-5'>Gain visibility within the legal community, potentially leading to career opportunities.</p>
          <p>Access job boards or career services that connect members with employment opportunities.</p>
        </FadeIn> 
        <FadeIn className='lg:w-[35%] md:block hidden h-auto'>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/lawyer_2.jpg?alt=media&token=597d8b5b-b391-456c-b7ae-bddf6411deb7'} 
            height={500} 
            width={1000} 
            className="h-auto lg:w-full w-[50%] mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </FadeIn>       
      </div>
      
      <div className='flex gap-6 justify-evenly lg:px-[5rem] items-center'>
        <FadeIn className='lg:w-[35%] md:block hidden h-auto'>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/lawyer_1.webp?alt=media&token=c0b6d340-7861-44a8-8f6c-8a9827fb2fc1'} 
            height={500} 
            width={1000} 
            className="h-auto lg:w-full w-[50%] mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </FadeIn>
        <FadeIn className='md:w-[40%] w-[80%] md:mx-0 mx-auto'>
          <p className='font-bold text-[18px] mb-8 text-[#555]'>Professional Recognition</p>
          
          <p className='mb-5'>Showcase your affiliation with a reputable law society, enhancing professional credibility.</p>
          <p>Potentially receive awards or recognition for contributions to the legal community.</p>
        </FadeIn>        
      </div>
      <FadeIn className='flex justify-center my-[4rem]'>
        <Link href={'/membership'}>
          <MainButton text='Become a Member'/>
        </Link>
        {/* <Button
            className='bg-[#192a56]'
            >
            Become a Member
        </Button> */}
      </FadeIn>
    </div>
  )
}

export default Membership