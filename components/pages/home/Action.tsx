import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainButton from '@components/common/MainButton'

function Action() {
  return (
    <div className='flex md:w-[80%] w-full mx-auto shadow-sm mb-[8rem]'>
      <div className='md:block hidden w-[40%] h-[20rem]'>
        <Image
          src={'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/consult.jpeg?alt=media&token=08f25e77-1f11-4e3a-a9cd-c0686ad9edbb'} 
          height={500} 
          width={1000} 
          className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
          alt='img'
          />
      </div>
      <div className='flex-1 bg-pink-50 md:p-8 p-5 h-auto py-4'>
        <p className='text-[26px] font-bold '>Looking for expert legal advice? <br/>We can help.</p>
        <p className='text-[20px] my-5'>Search the official database of professionals</p>
        <Link href={'/membership'} className='mt-5'>
          <MainButton text='Become a Member'/>
        </Link>
      </div>
    </div>
  )
}

export default Action