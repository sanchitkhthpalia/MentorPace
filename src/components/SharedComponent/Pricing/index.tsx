import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-darklight" id="pricing">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text pt-10 pb-4 dark:text-white">
            Pricing Plans
          </h2>
          <p className="text-grey dark:text-white/70 text-base font-semibold pb-12">
            Choose a plan that fits your mentorship needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          {/* Career Starter Plan */}
          <div className="bg-section dark:bg-darkmode rounded-lg p-8 shadow-service">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-2">
              Career Starter Plan
            </h3>
            <div className="text-3xl font-extrabold text-primary mb-4">
              ₹1,499
            </div>
            <ul className="list-disc ml-5 space-y-2 text-midnight_text dark:text-white/80">
              <li>Up to 30-Minute 1:1 Career Counseling Sessions</li>
              <li>Email Summary of Key Takeaways</li>
              <li>Quick Action Plan for Next Step</li>
              <li>Personalized Career Assessment</li>
            </ul>
            <div className="pt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Career Boost Blueprint Plan */}
          <div className="bg-section dark:bg-darkmode rounded-lg p-8 shadow-service">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-2">
              Career Boost Blueprint Plan
            </h3>
            <div className="text-3xl font-extrabold text-primary mb-4">
              ₹1,999
            </div>
            <ul className="list-disc ml-5 space-y-2 text-midnight_text dark:text-white/80">
              <li>Up to 60-Minute 1:1 Career Counseling Session</li>
              <li>7-Day Follow-up Session</li>
              <li>LinkedIn Profile & Resume Review</li>
              <li>Skill-Gap Analysis</li>
              <li>Actionable Roadmap</li>
              <li>Resource Recommendations</li>
              <li>Domain Specific Mentor</li>
            </ul>
            <div className="pt-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

