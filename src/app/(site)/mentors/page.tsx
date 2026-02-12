import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

export const metadata: Metadata = {
    title: "Our Mentors | MentorPace - Meet Expert Career Mentors",
    description: "Meet our experienced mentors who provide personalized career guidance across Software Engineering, MBA, Product Management, Creative Design, and Human Resource domains.",
};

const MentorsPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/mentors", text: "Mentors" },
  ];

  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "Career Counselor",
      domain: "General Career Guidance",
      experience: "15+ years",
      description: "Expert in career transitions, skill development, and professional growth strategies.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
    {
      name: "Rahul Desai",
      role: "Tech Mentor",
      domain: "Software Engineering",
      experience: "12+ years",
      description: "Senior software engineer with expertise in full-stack development and career advancement in tech.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
    {
      name: "Elena Petrova",
      role: "Business Strategy Mentor",
      domain: "MBA & Management",
      experience: "10+ years",
      description: "Strategic business consultant helping professionals excel in management and leadership roles.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
    {
      name: "Amitav Banerjee",
      role: "Product Management Mentor",
      domain: "Product Management",
      experience: "8+ years",
      description: "Product leader with experience at top tech companies, specializing in PM career growth.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
    {
      name: "Sarah Chen",
      role: "Design Mentor",
      domain: "Creative Design",
      experience: "9+ years",
      description: "UX/UI design expert helping designers build portfolios and advance their careers.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
    {
      name: "Michael Johnson",
      role: "HR Mentor",
      domain: "Human Resource",
      experience: "11+ years",
      description: "HR professional with expertise in talent acquisition, career transitions, and HR strategy.",
      image: getImgPath('/images/testimonial/vector-smart.png'),
    },
  ];

  return (
    <>
      <HeroSub
        title="Our Mentors"
        description="Connect with experienced professionals who provide personalized career guidance tailored to your goals and aspirations."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="bg-white dark:bg-darklight py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                data-aos-duration="1000"
                className="bg-section dark:bg-darkmode rounded-lg p-8 shadow-service text-center">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={120}
                  height={120}
                  className="mx-auto mb-4 rounded-full"
                />
                <div className="font-bold text-lg text-midnight_text dark:text-white mb-1">
                  {mentor.name}
                </div>
                <div className="text-sm text-primary font-semibold mb-2">
                  {mentor.role}
                </div>
                <div className="text-sm text-gray dark:text-white/70 mb-3">
                  {mentor.domain} • {mentor.experience}
                </div>
                <p className="text-grey dark:text-white/50 text-sm font-normal">
                  {mentor.description}
                </p>
                <a
                  href="/booking"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-semibold rounded-full shadow-md shadow-accent/20 hover:bg-accent/90 transition-colors duration-200">
                  Book Session
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MentorsPage;

