import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Team = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='team'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center'>
          <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-10 pb-12 dark:text-white'>
            Our Mentor Team
          </h2>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-7'>
          {/* Dr. Priya Sharma */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Dr. Priya Sharma'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Dr. Priya Sharma</div>
            <div className='text-sm text-gray dark:text-white/50'>Career Counselor</div>
          </div>
          {/* Rahul Desai */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Rahul Desai'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Rahul Desai</div>
            <div className='text-sm text-gray dark:text-white/50'>Tech Mentor</div>
          </div>
          {/* Elena Petrova */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Elena Petrova'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Elena Petrova</div>
            <div className='text-sm text-gray dark:text-white/50'>Business Strategy Mentor</div>
          </div>
          {/* Amitav Banerjee */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Amitav Banerjee'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Amitav Banerjee</div>
            <div className='text-sm text-gray dark:text-white/50'>Product Management Mentor</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
