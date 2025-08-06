import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Row, Col } from 'antd';
import { FaEye, FaRegHeart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import img from '../images/products/img-product.png';

gsap.registerPlugin(ScrollTrigger);

function Card({img}) {
  const cardRef = useRef(null);
  const heartRef = useRef(null);
  const eyeRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  // Icon hover animations
  const handleIconHover = (ref) => {
    gsap.to(ref.current, {
      scale: 1.3,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleIconLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div ref={cardRef}>
      <Row gutter={20}>
        <Col span={22}>
          <div className="main-card border border-[#43AAD5] rounded-md p-5 bg-black">
            <div className="main-custom-card justify-between flex flex-row">
              <h2 className="text-white font-syne text-2xl font-bold bg-[linear-gradient(60deg,_rgba(67,170,214,1)_80%,_rgba(0,0,1,1)_100%)] bg-clip-text text-transparent">
                Valentino
              </h2>
              <ul>
                <li
                  ref={heartRef}
                  onMouseEnter={() => handleIconHover(heartRef)}
                  onMouseLeave={() => handleIconLeave(heartRef)}
                  className="text-white p-2 rounded-md border border-white cursor-pointer"
                >
                  <FaRegHeart />
                </li>
                <li
                  ref={eyeRef}
                  onMouseEnter={() => handleIconHover(eyeRef)}
                  onMouseLeave={() => handleIconLeave(eyeRef)}
                  className="text-white p-2 mt-3 rounded-md border border-white cursor-pointer"
                >
                  <FaEye />
                </li>
              </ul>
            </div>

            <div className="card-image flex items-center justify-center mt-5 overflow-hidden">
              <img
                className="w-full h-[230px] object-contain transition-transform duration-300 hover:scale-105"
                src={img}
                alt="product"
              />
            </div>

            <div className="icons-part m-auto">
              <ul className="flex gap-2 items-center pt-5 justify-center">
                <li>
                  <span className="text-gray-400 line-through font-outfit text-[20px]">
                    $75.00
                  </span>
                </li>
                <li>
                  <span className="text-white font-outfit text-[30px]">
                    $75.00
                  </span>
                </li>
              </ul>

              <div className="flex justify-center items-center mt-5 mb-5 gap-3">
                <label className="cursor-pointer">
                  <input type="radio" name="mentin" className="peer hidden" />
                  <div className="px-6 font-outift py-2 rounded-full border border-white text-white font-medium peer-checked:bg-gradient-to-r peer-checked:from-[#43AAD6] peer-checked:to-black">
                    50ml
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input type="radio" name="mentin" className="peer hidden" />
                  <div className="px-6 py-2 font-outift rounded-full border border-white text-white font-medium peer-checked:bg-gradient-to-r peer-checked:from-[#43AAD6] peer-checked:to-black">
                    100ml
                  </div>
                </label>
              </div>

              <button className="font-syns text-[18px] rounded-full w-full flex items-center justify-center gap-2 text-white bg-[linear-gradient(90deg,_rgba(67,170,214,1)_0%,_rgba(0,0,0,1)_100%)] h-[50px] transition-all duration-300 hover:shadow-lg hover:scale-105">
                Add To Cart
                <span>
                  <HiOutlineShoppingBag />
                </span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Card;
