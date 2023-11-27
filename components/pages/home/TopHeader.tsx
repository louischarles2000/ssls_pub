'use client'
// import { Carousel } from '@components/MUI'
import React from 'react'
import Image from 'next/image'
import Carousel from '@material-tailwind/react/components/Carousel'
import { FadeIn, FadeRight } from '@components/common/AnimationWrappers'
import { Button } from '@components/MUI'
import MainButton from '@components/common/MainButton'
import Link from 'next/link'
function TopHeader() {
  const slides = [
    {
      route: '/',
      image: '/images/banner_1.png'
    },
    {
      route: '/',
      image: '/images/banner_1.png'
    },
  ]
  return (
    <div 
      className="w-full lg:h-[80vh] md:h-[60vh] h-auto overflow-hidden relative bg-orange-50 bg-fixed bg-cover lg:px-5 lg:py-[5rem] border-b-[1px]"
      style={{ 
        backgroundImage: "url('/images/cover_2.jpeg')", 
        backgroundPosition: 'right',
      }}
      >
      <FadeIn className='lg:w-[50%] w-full h-full bg-white shadow-md group md:p-[3rem] p-[1rem] space-y-[2rem]'>
        <div className='flex gap-3 '>
          <Image src='/icons/law.svg' height={30} width={30} alt='law'/>
          <h1 className='md:text-[33px] text-[25px] font-bold'>South Sudan Law Society.</h1>
        </div>
        <p className='md:text-[30px] text-[20px] font-bold text-[#555]'>We are a civil society organization that represents legal professionals in Juba.</p>
        <Link href={'/membership'}>
          <MainButton text='Become a Member'/>
        </Link>
      </FadeIn>
    </div>
  )
}

export default TopHeader