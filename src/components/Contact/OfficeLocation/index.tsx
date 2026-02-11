import React from 'react'
import Link from 'next/link'

const Location = () => {
  const breadcrumbLinks = [
    { href: '/', text: 'Home' },
    { href: '/contact', text: 'Contact' },
  ]
  return (
    <>
      <section className='bg-primary md:py-24 py-16'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className=''>
            <div className='grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7'>
              <div className='col-span-3'>
                <h2 className='text-white max-w-56 text-[40px] leading-tight font-bold'>
                  MentorPace Office
                </h2>
              </div>
              <div className='col-span-3'>
                <p className='sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-7 text-white/50'>
                  Sector 9 Rohini Delhi - 110085
                </p>
              </div>
              <div className='col-span-3'>
                <Link
                  href='mailto:team@mentorpace.com'
                  className='sm:text-2xl text-xl text-white font-medium underline'>
                  team@mentorpace.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
