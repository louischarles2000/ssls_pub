import { publications } from '@utils/data'
import { _shortenText } from '@utils/functions'
import Link from 'next/link'
import React from 'react'

function Related() {
  return (
    <div className='md:w-[70%] mx-auto my-[5rem]'>
      <h2 className='font-bold text-[20px] mb-6'>Related articles and publications</h2>
      {publications.map(pub => (
      <Link
        href={{
          pathname: '/resources/' + pub.title.split(' ').join('-'),
          query: {
            id: pub._id
          }
        }}
        key={pub._id}
        >
          <div 
            className='space-y-4 border-b-[1px] border-[#ccc] py-3 group cursor-pointer mb-6'
            >
            <p className='group-hover:underline'>{pub.title}</p>
            <p className='text-[#555]'>{_shortenText(pub.content[0].text, 120)}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Related