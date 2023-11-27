'use client'
import Divider from '@components/common/Divider'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const navs = [
  {
    route: '/',
    name: 'Home'
  },
  {
    route: '/programs',
    name: 'Programs'
  },
  {
    route: '/membership',
    name: 'Membership'
  },
  {
    route: '/events',
    name: 'Events'
  },
  {
    route: '/resources',
    name: 'Resources'
  },
  {
    route: '/find-solicitor',
    name: 'Find Solicitor'
  },
  // {
  //   route: '/contact-us',
  //   name: 'Contact us'
  // },
]
function Navbar() {
  const [ open, setOpen ] = useState(false);

  const toggle = () => setOpen(prev => !prev);

  return (
    <div className={`
    transition-all duration-200 px-8 lg:py-5 py-2 overflow-hidden border-b-[1px] lg-block fixed z-[999] bg-white top-0 left-0 w-full ${open ? ' h-[100%]' : 'h-auto'}
    `}>
      <div className=' flex justify-between items-center'>
        <Link href={'/'} className='cursor-pointer'>
          <Image src='/images/ssls_logo.png' height={100} width={300} alt='ssls' className='lg:block hidden'/>
          <Image src='/images/image1.png' height={60} width={60} alt='ssls' className='lg:hidden'/>
        </Link>
        
        <Image 
          src={open ? '/icons/cross.svg' : '/icons/menu.svg' }
          height={30} 
          width={30} 
          alt='ssls' 
          className='lg:hidden'
          onClick={toggle}
          />
        {/* Navs */}
        <nav className='lg:flex hidden list-none space-x-8'>
          {navs.map((_nav, index) => (
            <Link key={index} href={_nav.route}>
              <li className='transition-colors duration-200 text-[#718093] hover:text-[#192a56] font-semibold'>{_nav.name}</li>
            </Link>
          ))}
        </nav>
      </div>
      {open && 
      <>
      <Divider />
      <nav className='lg:hidden list-none '>
        {navs.map((_nav, index) => (
          <Link key={index} href={_nav.route} onClick={toggle}>
            <li className='transition-colors duration-200 text-[#718093] hover:text-[#192a56] font-light text-[20px] mb-[2rem]'>{_nav.name}</li>
          </Link>
        ))}    
      </nav>
      </>
      }
    </div>
  )
}

export default Navbar