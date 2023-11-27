import React from 'react'
import Image from 'next/image'
import { FadeIn } from '@components/common/AnimationWrappers'

function About() {
  return (
    <div className='my-[8rem] md:flex justify-evenly lg:px-[5rem] items-center'>
      <FadeIn className='lg:w-[35%] md:block hidden h-auto'>
        <Image 
          src={'/images/law.png'} 
          height={500} 
          width={1000} 
          className="h-auto lg:w-full w-[50%] mx-auto object-cover blur-none cursor-pointer animate-fade-up"
          alt='img'
          />
      </FadeIn>
      <FadeIn className='md:w-[40%] w-[80%] md:mx-0 mx-auto'>
        <h2 className='font-bold text-[20px] text-center mb-8'>— About SSLS —</h2>
        
        <p className='mb-5'>The SSLS is a civil society organization that represents legal professionals in Juba. </p>
        <p>Its mission is to strive for justice in society and respect for human rights and the rule of law in South Sudan.</p>
      </FadeIn>
    </div>
  )
}

export default About