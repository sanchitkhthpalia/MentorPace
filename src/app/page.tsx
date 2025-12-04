import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Testimonial from '@/components/SharedComponent/Testimonial'
import Pricing from '@/components/SharedComponent/Pricing'
import Team from '@/components/SharedComponent/Team'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Venus",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Pricing />
      <Team />
      <Testimonial />
      <Contactform />
    </main>
  )
}
