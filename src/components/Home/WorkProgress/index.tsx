'use client'
import React from 'react'
import Image from 'next/image'
import { whyUsBenefits } from '@/app/api/data'
import { getImgPath } from '@/utils/image'

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='why-us'>
      <div className='container mx-auto max-w-6xl px-4 py-16'>
        <div className='text-center mb-12'>
          <div className='flex gap-2 items-center justify-center mb-4'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Why Choose Us
            </span>
          </div>
          <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-7 pb-4 dark:text-white'>
            Why MentorPace?
          </h2>
          <p className='text-grey dark:text-white/70 text-base font-semibold md:w-4/6 w-full m-auto'>
            We provide personalized career guidance that helps you achieve your professional goals with clarity and confidence.
          </p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
          {whyUsBenefits.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service'>
              <div className='text-4xl mb-4'>{item.icon}</div>
              <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-3'>
                {item.title}
              </h3>
              <p className='text-grey dark:text-white/70 text-base font-normal'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Progresswork
