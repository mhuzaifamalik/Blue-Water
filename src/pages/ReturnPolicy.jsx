import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PrivacyPolicy() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <section className="privacy-policy">
        <div className="container mx-auto my-10 p-10">
          <h1
            className="text-4xl  text-center font-bold mb-8 font-syne"
            ref={addToRefs}
          >
            Privacy Policy
          </h1>

          <div className="space-y-6">
            <section ref={addToRefs}>
              <h2 className="text-2xl font-syne text-center font-semibold mb-2">1. Information Collection</h2>
              <p className='font-syne text-1xl text-center'>
                We collect information you provide when using our services, including name, email, and payment information.
              </p>
            </section>

            <section ref={addToRefs}>
              <h2 className="text-2xl font-syne text-center font-semibold mb-2">2. Use of Information</h2>
              <p className='font-syne text-1xl text-center'>
                Your information is used to process orders, improve our services, and communicate important updates.
              </p>
            </section>

            <section ref={addToRefs}>
              <h2 className="text-2xl font-syne text-center font-semibold mb-2">3. Cookies</h2>
              <p className='font-syne text-1xl text-center'>
                We use cookies to enhance user experience and track website usage. You can manage cookies in your browser settings.
              </p>
            </section>

            <section ref={addToRefs}>
              <h2 className="text-2xl font-syne font-semibold mb-2 text-center">4. Data Security</h2>
              <p className='font-syne text-1xl text-center'>
                We implement appropriate measures to protect your personal information from unauthorized access or disclosure.
              </p>
            </section>

            <section ref={addToRefs}>
              <h2 className="text-2xl font-syne font-semibold mb-2 text-center">5. Changes to Privacy Policy</h2>
              <p className='font-syne text-1xl text-center'>
                We may update our privacy policy periodically. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <p className="mt-6 font-syne text-gray-500 text-sm text-center text-center">
              Last updated: August 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
