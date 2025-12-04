import React from 'react'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='text-center'>
          <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-10 pb-12 dark:text-white'>
            What Our Customer Say
          </h2>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 pb-10'>
            <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-left'>
              <p className='font-medium md:text-lg text-base text-midnight_text dark:text-white mb-4'>
                MentorPace’s career guidance helped me choose the right path after graduation. The one-on-one mentorship and personalized roadmap gave me clarity and confidence to take my next steps.
              </p>
              <div>
                <strong className='text-base font-bold text-midnight_text dark:text-primary'>
                  Ria Thakur
                </strong>
                <p className='text-sm text-gray dark:text-white/50'>Graduate</p>
              </div>
            </div>
            <div className='bg-white dark:bg-darkmode rounded-lg p-8 shadow-service text-left'>
              <p className='font-medium md:text-lg text-base text-midnight_text dark:text-white mb-4'>
                Thanks to MentorPace, I identified my skill gaps and received a step-by-step career growth plan. The follow-ups and personalized advice boosted my confidence immensely.
              </p>
              <div>
                <strong className='text-base font-bold text-midnight_text dark:text-primary'>
                  Abhishek Mathur
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
