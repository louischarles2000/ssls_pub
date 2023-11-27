'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import React from 'react'

function SeeMoreBtn({ text, onClick }: {
  onClick?: () => void;
  text: string;
}) {
  return (
    <div
      className='text-[#192a56] flex items-center gap-3 group-hover:underline hover:underline cursor-pointer font-bold text-[14px]'
      onClick={onClick}
      >
      {text}
      <Image src={'/icons/arrow_right.svg'} height={15} width={15} alt='arrow' />
    </div>
  )
}

export default SeeMoreBtn