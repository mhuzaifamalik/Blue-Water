import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Img1 from '../images/products-banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  const title1Ref = useRef(null);
  const blueWaterRef = useRef(null); // Separate ref for Blue Water
  const fragrancesRef = useRef(null); // Separate ref for Fragrances
  const imageRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate Blue Water with opacity and scale
    gsap.fromTo(
      blueWaterRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    );

    // Animate Fragrances after Blue Water
    gsap.fromTo(
      fragrancesRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      imageRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.6,
      }
    );

    gsap.fromTo(
      title1Ref.current,
      { y: 100, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 1,
        ease: 'power3.out',
      }
    );

    gsap.fromTo(
      descRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className="banner-start bg-gradient-to-b h-[100vh] flex flex-col justify-center items-center text-center" style={{ background: 'linear-gradient(1deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
      <div className='relative z-[1]'>
        <h2
          ref={blueWaterRef}
          className=" lose font-syne text-black font-bold text-9xl "
        >
          Blue Water
        </h2>
        <h2
          ref={fragrancesRef}
          className="outlined-text font-syne text-black font-bold text-9xl leading-tight"
        >
          Fragrances
        </h2>
      </div>

      <img
        ref={imageRef}
        className="absolute bottom-0 left-1/1 transform -translate-x-1/2  ;"
        src={Img1}
        alt="Fragrance"
      />
      <div className="main-text relative z-[1]">
        <div
          ref={title1Ref}
          className="main-texture  text-white font-light font-outfit text-1xl text-start mt-4 absolute bottom-0 top-[0px] right-[50px] transform -translate-x-1/2 w-[400px]">
          <p>
            Awaken Your Senses with Every Spritz
          </p>
        </div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-[-100%] transform -translate-y-[-100%] w-[400px] text-white font-outfit text-start mt-4">
          <p
            ref={descRef}
            className="text-base font-light leading-relaxed"
          >
            Dive into a world of timeless elegance and fresh sophistication. Discover our signature scents crafted to leave a lasting impression.
          </p>
          <button
            ref={buttonRef}
            className='mt-5 text-black text-base font-medium bg-white rounded-full px-6 py-3 hover:bg-gray-100 transition-all duration-300'
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;