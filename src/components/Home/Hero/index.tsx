'use client'
import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Button from '@/components/Common/Button'

const Hero = () => {
  return (
    <section className='relative pt-32 md:pt-48 pb-16 md:pb-24 bg-background overflow-hidden transition-colors'>
      {/* Background Ornaments */}
      <div className='absolute top-0 right-0 -z-1 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]' />

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          {/* Text Content */}
          <div
            className='lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20'>
              <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
              <span className='font-bold text-accent text-xs uppercase tracking-widest'>
                MentorPace
              </span>
            </div>

            <h1 className='text-primary font-extrabold tracking-tight text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1]'>
              Expert Career <br className='hidden md:block' />
              <span className='text-accent'>Mentorship</span>, <br className='hidden md:block' />
              Made Simple
            </h1>

            <p className='text-secondary text-lg md:text-xl font-medium max-w-xl mx-auto lg:mx-0'>
              Connect with experienced professionals for 1:1 career guidance, clarity, and actionable advice — all in one place.
            </p>

            <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-4'>
              <Button variant='primary' size='lg' href='#services'>
                Get Started
              </Button>
              <Button variant='outline' size='lg' href='/about'>
                Learn More
              </Button>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 pt-8 border-t border-border-default'>
              <div className='flex items-center -space-x-3'>
                {[1, 2, 3].map((i) => (
                  <div key={i} className='w-12 h-12 rounded-full border-4 border-background overflow-hidden bg-card'>
                    <Image
                      src={getImgPath(`/images/hero/hero-profile-${i}.jpg`)}
                      alt='mentor'
                      width={48}
                      height={48}
                      className='object-cover'
                    />
                  </div>
                ))}
                <div className='w-12 h-12 rounded-full border-4 border-background bg-accent flex items-center justify-center text-white font-bold text-xs'>
                  +50
                </div>
              </div>
              <p className='text-sm font-semibold text-secondary'>
                Joined by <span className='text-primary'>10,000+</span> students <br className='hidden sm:block' /> ready to grow their careers
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div
            className='lg:w-1/2 relative'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <div className='relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border-default transform hover:scale-[1.01] transition-transform duration-500'>
              <Image
                src={getImgPath('/images/hero/hero-image.png')}
                alt='Expert Mentorship'
                width={650}
                height={450}
                className='w-full h-auto object-cover'
                priority
              />
            </div>

            {/* Ornamentals */}
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full -z-1 blur-2xl' />
            <div className="absolute -top-10 right-0 w-24 h-24 bg-[url('/images/hero/round-leyar.svg')] bg-no-repeat opacity-20 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
