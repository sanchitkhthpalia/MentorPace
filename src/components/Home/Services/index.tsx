import React from 'react'
import { Servicebox } from '@/app/api/data'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='bg-background transition-colors' id='services'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center max-w-3xl mx-auto space-y-4 mb-16'>
          <div
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
            <span className='font-bold text-accent text-xs uppercase tracking-widest'>
              Featured Domains
            </span>
          </div>

          <h2
            className='text-primary text-3xl md:text-5xl font-extrabold leading-tight'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='100'
          >
            Connect With Expert Mentors
          </h2>

          <p
            className='text-secondary text-lg font-medium'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='200'
          >
            MentorPace bridges the gap between ambitious learners and industry veterans for high-impact 1:1 career guidance.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='1000'
              className='group bg-card p-10 rounded-[2rem] border border-border-default shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 flex flex-col items-center text-center gap-6'
            >
              <div className='w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className='w-10 h-10 object-contain'
                />
              </div>

              <h3 className='text-primary text-2xl font-bold tracking-tight'>
                {item.title}
              </h3>

              <p className='text-secondary text-base leading-relaxed'>
                {item.description}
              </p>

              <div className='mt-auto pt-6 w-full border-t border-border-default/50'>
                <span className='text-accent text-sm font-bold uppercase tracking-wider group-hover:underline cursor-pointer'>
                  Explore Domain →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
