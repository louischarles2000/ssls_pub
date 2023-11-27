'use client'
import Divider from '@components/common/Divider';
import { _programs } from '@utils/data';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import React from 'react'

function ProgramDetailsScreen() {
  const params = useSearchParams();
  const id = params.get('id');
  const program = _programs.find(prog => prog._id === id);

  if(!program){
    return (
      <div className='my-[8rem] text-center text-[30rem]'>
        <p>Program not found!</p>
      </div>
    )
  }

  return (
    <div className='lg:p-[8rem] md:p-8 pt-8 px-5 pb-[8rem]'>
      <div className='md:w-[70%] mx-auto'>
        <h1 className='font-bold text-[30px]'>{program?.title}</h1>
        <Divider />
        <p className='mb-4'>29 Aug 2023 | 1 minute read</p>
        {program.image &&
        <div className='w-full max-h-[80vh] overflow-hidden'>
          <Image
            src={program?.image} 
            height={500} 
            width={1000} 
            className="w-full h-full mx-auto object-contain blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </div>}
        <div className='my-[2rem]'>
          {program.content.map((cont, index) => (
            cont.type === 'p' ? <p key={index} className='text-[16px] mb-5'>{cont.text}</p> : <p key={index} className='font-bold text-[23px] mt-[2rem]'>{cont.text}</p>
          ))}
        </div>
        <div className='flex flex-1 items-center'>
          {program.resources.map((res, index) => (
            <div 
              key={index} 
              title='Open File'
              className='flex items-center gap-4 p-2 cursor-pointer text-[#180a85] border-[1px] border-[#180a85]'
              onClick={() => {
                window.open(res, '_blank');
              }}
              >
              Resource file {index+1}
              <Image src={'/icons/pdf.svg'} height={20} width={20} alt='file'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgramDetailsScreen