import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Services from '@/components/Home/Services';
import Testimonial from '@/components/SharedComponent/Testimonial'
import Pricing from '@/components/SharedComponent/Pricing'
import Team from '@/components/SharedComponent/Team'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "MentorPace - Expert Career Mentorship, Made Simple",
  description: "Connect with experienced professionals for 1:1 career guidance, clarity, and actionable advice. Get personalized mentorship across Software Engineering, MBA, App Development, Product Management, and more.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Services />
      <Pricing />
      <Team />
      <Testimonial />
      <Contactform />
    </main>
  )
}
