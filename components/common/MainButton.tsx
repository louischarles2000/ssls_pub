import { Button } from '@components/MUI'
import React from 'react'

function MainButton({ text }: {
  text: string;
}) {
  return (
    <Button
      className='rounded-none shadow-none hover:shadow-none hover:underline bg-[#192a56] hover:bg-black'
      >
      {text}
    </Button>
  )
}

export default MainButton