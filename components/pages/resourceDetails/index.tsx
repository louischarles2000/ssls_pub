'use client'
import Divider from '@components/common/Divider';
import { other_resources, publications } from '@utils/data';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image';

function ResourceDetailsScreen() {
  const params = useSearchParams();
  const id = params.get('id');
  const resource = [ ...publications, ...other_resources ].find(r => r._id === id);

  if(!resource){
    return (
      <div className='my-[8rem] text-center text-[30rem]'>
        <p>Resource not found!</p>
      </div>
    )
  }

  return (
    <div className='lg:p-[8rem] md:p-8 pt-8 px-5 pb-[8rem]'>
    <div className='md:w-[70%] mx-auto'>
      <h1 className='font-bold text-[30px]'>{resource?.title}</h1>
      <Divider />
      <p className='mb-4'>29 Aug 2023 | 1 minute read</p>
      {resource.image &&
      <div className='w-[20rem] max-h-[40vh] overflow-hidden border-[1px]'>
        <Image
          src={resource?.image} 
          height={500} 
          width={1000} 
          className="w-full h-full mx-auto object-contain blur-none cursor-pointer animate-fade-up"
          alt='img'
          />
      </div>}
      <div className='my-[2rem]'>
        {resource.content.map((cont, index) => (
          cont.type === 'p' ? <p key={index} className='text-[16px] mb-5'>{cont.text}</p> : <p key={index} className='font-bold text-[23px] mt-[2rem]'>{cont.text}</p>
        ))}
      </div>
      <div className='flex flex-1 items-center'>
        {resource.resources.map((res, index) => (
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

export default ResourceDetailsScreen