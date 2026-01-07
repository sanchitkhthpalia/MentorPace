
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Services from "@/components/Home/Services";
export const metadata: Metadata = {
    title: "Services | MentorPace - Personalized Career Mentorship",
    description: "Get personalized 1:1 video sessions with experienced mentors. Secure, confidential, and effortless booking. Career counseling across Software Engineering, MBA, Product Management, and more.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Get personalized 1:1 mentorship sessions with experienced industry professionals. Our secure and confidential platform makes booking effortless, so you can focus on your career growth."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Services/>
    </>
  );
};

export default page;
