import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '@styles/globals.css'
import Infobar from '@components/layouts/Infobar'
import Navbar from '@components/layouts/Navbar'
import Footer from '@components/layouts/Footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: [ '100', '200', '300', '400', '500', '700', '900' ]
})

export const metadata: Metadata = {
  title: 'South Sudan Law Society',
  description: 'The official Law society in South Sudan.',  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className='min-h-[100vh]'>
          <Infobar />
          <Navbar />
          <div className='lg:pt-0 md:pt-[2.3rem] pt-[4.6rem]'>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
