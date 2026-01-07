import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | MentorPace - Get in Touch",
    description: "Contact MentorPace for career guidance inquiries. Reach out via email, phone, or fill out our contact form. We're here to help you on your career journey.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Us"
        description="Have questions about our mentorship services? Get in touch with our team. We're here to help you find the right mentor and start your career journey."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default page;
