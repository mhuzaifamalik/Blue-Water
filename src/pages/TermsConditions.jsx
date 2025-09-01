import React, { useEffect, useRef } from "react";
import { Row, Col } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TermsConditions() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // when top of section hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  // Helper to add ref for each section
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <section className="terms pt-10 pb-10">
        <div className="container mx-auto">
          <Row justify="center" align="top" gutter={[16, 16]}>
            <Col xs={20} md={20} lg={20}>
              <div
                className="termsDec p-10 rounded-xl"
                ref={addToRefs}
              >
                <h1
                  className="text-4xl text-center font-bold mb-6 font-syne"
                  ref={addToRefs}
                >
                  Terms and Conditions
                </h1>

                <p className="mb-4 font-syne text-center text-1xl" ref={addToRefs}>
                  Welcome to our website. By accessing or using our site, you
                  agree to comply with these terms and conditions.
                </p>

                <h2
                  className="font-syne text-4xl text-center font-semibold mt-6 mb-3"
                  ref={addToRefs}
                >
                  1. Use of Website
                </h2>
                <p className="mb-4 font-syne text-1xl text-center" ref={addToRefs}>
                  You may use our website for lawful purposes only. Any
                  unauthorized use is prohibited.
                </p>

                <h2
                  className="text-2xl text-4xl font-syne text-center font-semibold mt-6 mb-3"
                  ref={addToRefs}
                >
                  2. Products & Services
                </h2>
                <p className="mb-4 font-syne text-1xl text-center" ref={addToRefs}>
                  All products are described to the best of our ability. Prices
                  and availability are subject to change without notice.
                </p>

                <h2
                  className="text-4xl font-syne text-center font-semibold mt-6 mb-3"
                  ref={addToRefs}
                >
                  3. Orders & Payments
                </h2>
                <p className="mb-4 text-1xl font-syne text-center" ref={addToRefs}>
                  By placing an order, you agree to provide accurate
                  information and pay all applicable charges.
                </p>

                <h2
                  className="text-4xl font-syne text-center font-semibold mt-6 mb-3"
                  ref={addToRefs}
                >
                  4. Privacy
                </h2>
                <p className="mb-4 text-1xl font-syne text-center" ref={addToRefs}>
                  We respect your privacy and handle personal information
                  according to our Privacy Policy.
                </p>

                <h2
                  className="text-4xl font-syne text-center font-semibold mt-6 mb-3"
                  ref={addToRefs}
                >
                  5. Limitation of Liability
                </h2>
                <p className="mb-4 text-1xl font-syne text-center" ref={addToRefs}>
                  We are not liable for any damages arising from the use of our
                  website or products.
                </p>

                <p
                  className="mt-6 font-syne text-center text-gray-500 text-sm"
                  ref={addToRefs}
                >
                  Last updated: August 2025
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default TermsConditions;
