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
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7'>
          {/* Terry Green */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Terry Green'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Terry Green</div>
            <div className='text-sm text-gray dark:text-white/50'>Chief Executive</div>
          </div>
          {/* Brandon Hudson */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Brandon Hudson'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Brandon Hudson</div>
            <div className='text-sm text-gray dark:text-white/50'>Developer</div>
          </div>
          {/* Sara Fox */}
          <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-center'>
            <Image
              src={getImgPath('/images/testimonial/vector-smart.png')}
              alt='Sara Fox'
              width={120}
              height={120}
              className='mx-auto mb-4'
            />
            <div className='font-bold text-lg text-midnight_text dark:text-white'>Sara Fox</div>
            <div className='text-sm text-gray dark:text-white/50'>Web Designer</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
