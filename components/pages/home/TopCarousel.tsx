'use client'
// import { Carousel } from '@components/MUI'
import React from 'react'
import Image from 'next/image'
import Carousel from '@material-tailwind/react/components/Carousel'
function TopCarousel() {
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
    <div className="bg-[#3498db] bg-opacity-25 w-full" >
      <Carousel 
        autoplay 
        // loop 
        className='lg:py-4 lg:pb-8'
        >
        {slides.map((slide, index) => (
          <Image 
            src={slide.image} 
            key={index} 
            height={500} 
            width={1000} 
            className="h-auto lg:w-[70%] w-full mx-auto object-cover blur-none shadow-xl cursor-pointer"
            alt='img' 
            />
        ))}
      </Carousel>
    </div>
  )
}

export default TopCarousel