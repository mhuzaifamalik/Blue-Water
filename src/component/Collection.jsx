import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import Cest from '../images/a05a0a42bcac645e84ef6ec3c2b3badd2f935648.gif';
import Cest1 from '../images/cart-image1.png';
import img from '../images/cart-image.png';


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // ✅ Register plugin

const GridExample = () => {
  // Refs for each column
  const leftRef = useRef(null);
  const middleRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const animateItem = (ref, delay = 0) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    };

    animateItem(leftRef);
    animateItem(middleRef, 0.2);
    animateItem(rightRef, 0.4);
  }, []);

  return (
    <div className="bg-black pt-20 pb-20">
      <div className="container mx-auto px-4">
        <Row gutter={20}>
          {/* Left Column */}
          <Col span={8}>
            <div
              ref={leftRef}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
              }}
            >
              <div className="catagoire flex p-5 align-item-center flex-col justify-center">
                <h3 className="font-syne text-start text-white font-bold text-[30px]">Men Collection</h3>
                <p className="font-syne text-white font-thin text-[16px] w-[300px]">
                  Discover masculine scents that exude strength, elegance, and timeless appeal.
                </p>
                <button className="text-start rounded-full font-syne text-[16px] font-bold bg-white text-black p-5 w-fit hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">
                  Explore Men’s Fragrances
                </button>
              </div>
            </div>
          </Col>

          {/* Middle Column */}
          <Col span={8}>
            <div ref={middleRef} className="video-catagore p-4 text-white flex items-center justify-center h-full">
              <img src={Cest} alt="Animated gif" />
            </div>
          </Col>

          {/* Right Column */}
          <Col span={8}>
            <div
              ref={rightRef}
              style={{
                backgroundImage: `url(${Cest1})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'end',
              }}
            >
              <div className="catagoire motion-flex flex flex-col p-5 items-end justify-center">
                <h3 className="font-syne text-end text-white font-bold text-[30px]">Men Collection</h3>
                <p className="font-syne text-end text-white font-thin text-[16px] w-[300px]">
                  Discover masculine scents that exude strength, elegance, and timeless appeal.
                </p>
                <button className="text-end rounded-full font-syne text-[16px] font-bold bg-white text-black p-5 w-fit hover:bg-black hover:text-white hover:shadow-lg transition-all duration-300">
                  Explore Men’s Fragrances
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GridExample;
