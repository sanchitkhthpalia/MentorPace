"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getImgPath } from "@/utils/image";

const Contactform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!acceptedTerms) {
      setError("Please accept the Terms and Conditions.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        access_key: "5b78b222-617f-482b-9c9f-0d95373e2620",
        name: `${firstName.trim()} ${lastName.trim()}`.trim(),
        email: email.trim(),
        subject: "Career guidance enquiry from MentorPace",
        message: message.trim(),
        country: country.trim(),
        source: "MentorPace Home Contact Form",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        console.error("Web3Forms contact error:", data);
        setError(
          data.message || "Failed to send your message. Please try again."
        );
        return;
      }

      setSubmitted(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setCountry("");
      setMessage("");
      setAcceptedTerms(false);
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="overflow-x-hidden bg-darkmode dark:bg-darklight">
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>
          <div
            className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-white pt-4 pb-12'>
              Ready to take your career to the next level? Let's connect.
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-6 pb-12 border-b border-dark_border '>
              <div className='col-span-6 md:col-span-3'>
                <span className='text-white/50 text-lg'>Email</span>
                <p className='bg-transparent border-0 text-white text-base sm:text-lg break-all'>
                  team@mentorpace.com
                </p>
              </div>
              <div className='col-span-6 pt-8'>
                <span className='text-white/50 text-lg'>Location</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  Sector 9 Rohini Delhi - 110085
                </p>
              </div>
            </div>
            <div className='pt-12'>
              <p className='text-white/50 pb-4 text-base'>Trusted by</p>
              <div className='flex items-center flex-wrap md:gap-14 gap-7'>
                <Image
                  src={getImgPath('/images/contact/google-pay.png')}
                  alt='Google-pay'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='w_f max-w-28 w-full h-5'
                />
                <Image
                  src={getImgPath('/images/contact/play-juction.png')}
                  alt='play-juction'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='w_f max-w-24 w-full h-6'
                />
                <Image
                  src={getImgPath('/images/contact/stripe.png')}
                  alt='stripe'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='w_f max-w-14 w-full h-6'
                />
                <Image
                  src={getImgPath('/images/contact/wise.png')}
                  alt='wise'
                  width={100}
                  height={20}
                  style={{ width: 'auto', height: 'auto' }}
                  quality={100}
                  className='w_f max-w-16 w-full h-4'
                />
              </div>
            </div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="relative before:content-[''] before:absolute before:bg-[url('/images/contact/form-line.png')] before:bg-no-repeat before:w-[13rem] before:h-24 before:top-5% before:bg-contain before:left-[35%] before:z-1 before:translate-x-full lg:before:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/contact/from-round-line.png')] after:bg-no-repeat after:w-[6.3125rem] after:h-[6.3125rem] after:bg-contain after:top-1/2 after:-left-[25%] after:z-1 after:translate-x-1/2 after:translate-y-1/2 md:after:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
            <div className="lg:mt-0 mt-8  bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10">
              <h2 className="sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white">
                Get Career Guidance
              </h2>
              {submitted && (
                <div className="mb-4 p-4 rounded-2xl bg-accent/10 border border-accent/30 text-sm font-medium text-accent">
                  Thank you! Your message has been sent. We&apos;ll get back to
                  you soon.
                </div>
              )}
              {error && (
                <div className="mb-4 p-3 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/60 text-sm font-medium text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                className="flex w-full m-auto justify-between flex-wrap gap-4"
              >
                <div className="flex gap-4">
                  <input
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
                    placeholder="youremail@website.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <input
                    className="text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <textarea
                    className="text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border! border-border border-solid! focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0"
                    placeholder="Tell us about your career goals and what you'd like to achieve"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    value="yes"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="hover:opacity-1 checked:bg-primary checked:opacity-1 relative border-2 border-solid border-primary rounded-xs bg-none cursor-pointer leading-none mr-2 outline-0 p-0! align-text-top h-[1.25rem] sm:w-[1.25rem] w-[2.25rem] opacity-[0.5] before:content-[''] before:absolute before:right-1/2 before:top-1/2 before:w-1 before:h-2 before:z-2 before:-mt-[0.0625rem] before:-ml-[0.0625rem] before:-mr-[0.0625rem] before:transform before:rotate-45 before:translate-x-[-50%] before:translate-y-[-50%] dark:focus:border-primary"
                  />
                  <div className="text-grey dark:text-white/50">
                    I have read and acknowledge the{" "}
                    <a
                      href="/terms-and-conditions"
                      className="text-accent inline cursor-pointer hover:underline"
                    >
                      Terms and Conditions{" "}
                    </a>
                  </div>
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Get Started"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform
