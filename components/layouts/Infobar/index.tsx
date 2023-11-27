import React from 'react'

type ContactType = {
  value: string;
  prefix: string;
}
function Infobar() {
  const contacts: ContactType[] = [
    {
      value: '+211 955 518 206',
      prefix: 'tel'
    },
    {
      value: '+211 955 518 206',
      prefix: 'tel'
    },
    {
      value: 'info@sslawsociety.org',
      prefix: 'mailto'
    },
  ]
  return (
    <div className='w-full bg-[#192a56] py-2 px-8 justify-between items-center text-white md:flex hidden'>
      <div className='lg:w-[50%] w-full lg:justify-start justify-center flex space-x-[3rem]'>
        {contacts.map((contact, index) => (
          <a 
            key={index} 
            href={`${contact.prefix}:${contact.value}`}
            className='font-light hover:underline'
            >
            {contact.value}
          </a>
          
        ))}
      </div>
      <div className='lg:block hidden'>
        Login Buttons
      </div>
    </div>
  )
}

export default Infobar