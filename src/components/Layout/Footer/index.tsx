"use client";

import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImgPath } from '@/utils/image'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  return (
    <footer className='bg-card border-t border-border-default pt-20 pb-10 transition-colors'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Brand Column */}
          <div className='space-y-6'>
            <Link href='/' className='flex items-center gap-3'>
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-accent/10 flex items-center justify-center">
                <Image
                  src={getImgPath('/images/logo/logo.png')}
                  alt='MentorPace logo'
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black text-primary tracking-tight">MentorPace</span>
            </Link>
            <p className='text-secondary text-base leading-relaxed max-w-xs'>
              Empowering the next generation of tech leaders through high-impact, personalized mentorship and career guidance.
            </p>
            <div className='flex items-center gap-4'>
              <Link href='#' className='w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all'>
                <Icon icon="fa6-brands:facebook-f" className="text-lg" />
              </Link>
              <Link href='#' className='w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all'>
                <Icon icon="fa6-brands:x-twitter" className="text-lg" />
              </Link>
              <Link href='#' className='w-10 h-10 rounded-full border border-border-default flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-all'>
                <Icon icon="fa6-brands:linkedin-in" className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-primary font-bold text-lg'>Platform</h3>
            <ul className='space-y-4'>
              <li>
                <Link href='/services' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Features
                </Link>
              </li>
              <li>
                <Link href='/mentors' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Expert Mentors
                </Link>
              </li>
              <li>
                <Link href='/booking' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Book Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-6'>
            <h3 className='text-primary font-bold text-lg'>Resources</h3>
            <ul className='space-y-4'>
              <li>
                <Link href='/about' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Our Story
                </Link>
              </li>
              <li>
                <Link href='/support' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Support Center
                </Link>
              </li>
              <li>
                <Link href='/terms-and-conditions' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Legal Terms
                </Link>
              </li>
              <li>
                <Link href='mailto:team@mentorpace.com' className='text-secondary hover:text-accent transition-colors flex items-center gap-2'>
                  <span className='w-1.5 h-1.5 rounded-full bg-accent/30'></span> Email Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='space-y-6'>
            <h3 className='text-primary font-bold text-lg'>Keep Up to Date</h3>
            <p className='text-secondary text-sm leading-relaxed'>
              Join 5,000+ professionals receiving our weekly career insights.
            </p>
            <form className='relative' onSubmit={(e) => e.preventDefault()}>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full p-4 pr-12 rounded-2xl bg-background border border-border-default focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all text-primary'
              />
              <button
                type='submit'
                className='absolute right-2 top-2 w-10 h-10 flex items-center justify-center bg-accent text-white rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20'
              >
                <Icon icon="ph:paper-plane-tilt-bold" className="text-xl" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className='pt-10 border-t border-border-default flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-secondary text-sm font-medium'>
            © {new Date().getFullYear()} MentorPace. All rights reserved.
          </p>
          <div className='flex items-center gap-8'>
            <Link href='/terms-and-conditions' className='text-secondary text-sm hover:text-accent transition-colors'>Privacy Policy</Link>
            <Link href='/terms-and-conditions' className='text-secondary text-sm hover:text-accent transition-colors'>Terms of Service</Link>
            <Link href='/support' className='text-secondary text-sm hover:text-accent transition-colors'>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
