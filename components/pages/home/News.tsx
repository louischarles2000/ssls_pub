import { FadeIn } from '@components/common/AnimationWrappers'
import SeeMoreBtn from '@components/common/SeeMoreBtn'
import React from 'react'
import Image from 'next/image'
import { _posts } from '@utils/data'
import { _shortenText } from '@utils/functions'
import BlogCard from './BlogCard'
import { blob } from 'stream/consumers'

function News() {

  return (
    <div className='mt-[2rem] lg:px-[5rem] px-6 bg-white py-[3rem] '>
      <FadeIn className='w-full'>
        <div className='md:flex items-center justify-between mb-4'>
          <h2 className='font-bold text-[20px] mb-8 md:text-left text-center'>— News and Blogs —</h2>
          <SeeMoreBtn text='View all'/>
        </div>
      </FadeIn>
      <FadeIn className='md:flex hidden w-full mx-auto cursor-pointer group'>
        <div className='flex-1 lg:space-y-5 md:space-y-3 group'>
          <div className='flex items-center gap-3 text-[15px] text-[#555]'>
            <p>{_posts[0].tags.join(', ')} |</p>
            <p> {_posts[0].type}</p>
          </div>
          <p className='font-bold text-[25px] group-hover:underline'>{_shortenText(_posts[0].title, 80)}</p>
          <p>{_shortenText(_posts[0].content, 160)}</p>
          <p className='lg:absolute bottom-3 left-3'>{_posts[0].date}</p>
        </div>
        <div className='md:block hidden w-[50%] h-[17rem]'>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/constant-disk-406311.appspot.com/o/computer_1.jpg?alt=media&token=cbd9736b-7820-49a0-a333-cf75e28f91f9'} 
            height={500} 
            width={1000} 
            className="w-full h-full mx-auto object-cover blur-none cursor-pointer animate-fade-up"
            alt='img'
            />
        </div>
      </FadeIn>
      {/* List */}
      <div className='my-[3rem] flex flex-wrap justify-start gap-5'>
        {_posts.map(post => (
          <BlogCard key={post._id} blog={post}/>
        ))}
      </div>
    </div>
  )
}

export default News