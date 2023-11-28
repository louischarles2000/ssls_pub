'use client'
// import { Carousel } from '@components/MUI'
import React from 'react'
import Image from 'next/image'
import Carousel from '@material-tailwind/react/components/Carousel'
function TopCarousel() {
  const slides = [
    {
      route: '/',
      image: 'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/banner_1.png?alt=media&token=e17d1afa-1eb9-4318-b368-569c087e16b6'
    },
    {
      route: '/',
      image: 'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/banner_1.png?alt=media&token=e17d1afa-1eb9-4318-b368-569c087e16b6'
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