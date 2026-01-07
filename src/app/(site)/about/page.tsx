
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Counter from "@/components/Home/Counter";
export const metadata: Metadata = {
    title: "About Us | MentorPace - Our Mission & Team",
    description: "Learn about MentorPace's mission to support students, graduates, and professionals through personalized, industry-specific mentorship. Meet our experienced team of career counselors and mentors.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <HeroSub
        title="About Us"
        description="MentorPace is dedicated to supporting students, graduates, and professionals through personalized, industry-specific mentorship. We bridge the gap between aspiration and achievement."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="bg-white dark:bg-darklight py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-6">Our Story and Mission</h2>
            <div className="space-y-4 text-grey dark:text-white/70 text-base">
              <p>
                MentorPace was founded with a clear vision: to make expert career guidance accessible to everyone. 
                We recognized that students, graduates, and professionals often struggle to find the right direction 
                in their careers, facing challenges like unclear career paths, skill gaps, and lack of industry insights.
              </p>
              <p>
                Our mission is to connect individuals with experienced mentors who can provide personalized guidance, 
                actionable roadmaps, and the confidence needed to achieve their professional goals. We believe that 
                everyone deserves access to quality mentorship, regardless of their background or financial situation.
              </p>
              <p>
                Through our platform, we've helped hundreds of individuals navigate their career journeys, make informed 
                decisions, and take meaningful steps toward their aspirations. We're committed to continuing this mission 
                and expanding our reach to help even more people achieve career success.
              </p>
            </div>
          </div>
        </div>
      </section>
       <Counter isColorMode={true} />
    </>
  );
};

export default page;
