import React from 'react'

function PageHeader({ title, description }: {
  title: string;
  description?: string;
}) {
  return (
    <div className='md:p-[5rem] p-8 bg-blue-gray-100 space-y-5 text-center'>
      <h1 className='font-bold md:text-[30px] text-[20px]'>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PageHeader