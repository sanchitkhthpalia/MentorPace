import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

export const metadata: Metadata = {
    title: "How It Works | MentorPace - Connect With Mentors",
    description: "Learn how MentorPace works. Simple steps to connect with experienced mentors, book sessions, and receive personalized career guidance.",
};

const HowItWorksPage = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/how-it-works", text: "How It Works" },
  ];

  const steps = [
    {
      number: "1",
      icon: "🎯",
      title: "Choose Your Domain",
      description:
        "Select the career domain you want guidance in - Software Engineering, MBA, Product Management, Creative Design, or Human Resource.",
    },
    {
      number: "2",
      icon: "🧑‍🏫",
      title: "Select a Mentor",
      description:
        "Browse through our experienced mentors, read their profiles, and choose the one that best matches your career goals.",
    },
    {
      number: "3",
      icon: "📅",
      title: "Book a Session",
      description:
        "Choose a convenient date and time for your 1:1 video session. Our platform makes booking effortless and secure.",
    },
    {
      number: "4",
      icon: "💡",
      title: "Get Personalized Guidance",
      description:
        "Attend your session and receive personalized career counseling, actionable roadmaps, and expert advice tailored to your needs.",
    },
  ];

  return (
    <>
      <HeroSub
        title="How It Works"
        description="Connecting with a mentor is simple. Follow these easy steps to start your career journey with personalized guidance."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="bg-white dark:bg-darklight py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                className="bg-section dark:bg-darkmode rounded-lg p-8 shadow-service"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-darklight flex items-center justify-center shadow-md text-2xl">
                    <span className="text-accent">{step.icon}</span>
                  </div>
                  <div>
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-grey dark:text-white/70 text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-section dark:bg-darklight py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-midnight_text dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-grey dark:text-white/70 text-lg mb-8">
              Join hundreds of professionals who have transformed their careers with MentorPace. 
              Book your first session today and take the first step toward achieving your career goals.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/90 transition-colors duration-200 shadow-md shadow-accent/20"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;

