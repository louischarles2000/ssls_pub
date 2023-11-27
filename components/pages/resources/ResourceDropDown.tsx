'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ProgramType } from '@utils/types';
import Link from 'next/link';

function ResourceDropDown({ title, list, linkless }: {
  title: string;
  list?: ProgramType[]
  linkless?: string[]
}) {
  const [ drop, setDrop ] = useState(false)
  return (
    <div className='border-t-[1px] border-[#ccc]'>
      <div 
        className='flex justify-between p-3 cursor-pointer'
        onClick={() => setDrop(prev => !prev)}
        >
        <p className='font-bold text-[20px]'>{title} ({list ? list.length : (linkless ? linkless.length : 0)})</p>
        <Image 
          src='/icons/cross.svg' 
          height={15} 
          width={15} 
          alt='icon' 
          className={`transition-all duration-200 ${!drop ? ' rotate-45' : ' rotate-0'}`}/>
      </div>
      {drop &&
      <ul className='w-[90%] mx-auto mb-5'>
        {list &&
        list.map(item => (
          <Link
            href={{
              pathname: '/resources/' + item.title.split(' ').join('-'),
              query: {
                id: item._id
              }
            }}
            key={item._id}
            >
            <li className='hover:underline list-disc'>{item.title}</li>
          </Link>
        ))}

        {linkless &&
        linkless.map((item, index) => (
          <Link
            href={{
              pathname: '/resources',
            }}
            key={index}
            >
            <li className='hover:underline list-disc'>{item}</li>
          </Link>
        ))}
      </ul>}
    </div>
  )
}

export default ResourceDropDown