import { FadeIn } from '@components/common/AnimationWrappers'
import { _shortenText } from '@utils/functions'
import { EventType, PostType } from '@utils/types'
import React from 'react'
import Image from 'next/image'

function BlogCard({ blog }: { blog: PostType }) {
  return (
    <FadeIn className='transition-all duration-200 border-[1px] pt-0 overflow-hidden min-h-[13rem] md:w-[30%] w-[90%] mx-auto border-t-[3px] border-[#273c75] group space-y-5 cursor-pointer hover:shadow-lg hover:border-t-[0px] hover:translate-y-[-4px]'>
      <div className='w-full h-[8rem]'>
        <Image
          src={blog.image} 
          height={500} 
          width={1000} 
          className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
          alt='img'
          />
      </div>
      <div className='bg-white p-5 '>
        <p className='font-bold group-hover:underline'>{_shortenText(blog.title, 75)}</p>
        <p>{_shortenText(blog.content, 120)}</p>
        <p className='mt-4'>{blog.date}</p>
      </div>
    </FadeIn>
  )
}

export default BlogCard