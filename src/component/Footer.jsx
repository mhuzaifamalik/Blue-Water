import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import logo from '../images/logo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 100 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="bg-black" ref={footerRef}>
      <div className="container mx-auto px-4">
        <footer className="bg-gradient-to-b from-white to-black text-white rounded-l-[42px] rounded-r-[42px]">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <Row gutter={[32, 32]}>
              {/* Logo & Description */}
              <Col xs={24} md={6}>
                <div className="flex items-center space-x-2 mb-4">
             <a href="/">     <img src={logo} alt="Logo" /></a>
                </div>
                <p className="text-sm font-outfit text-black-400 pt-4 pb-5 text-black">
                  Dive into a world of timeless elegance and fresh sophistication. Discover our signature scents crafted to leave a lasting impression.
                </p>
                <div className="flex space-x-4 mt-4">
                 <FaFacebookF className="hover:text-white cursor-pointer text-black text-[25px]" />
<FaInstagram className="hover:text-white cursor-pointer text-black text-[25px]" />
                </div>
              </Col>

              {/* Main Links */}
              <Col xs={24} md={6}>
                <h3 className="font-semibold mb-4 text-black font-syne">Main Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className='font-outfit text-black'>Home</a></li>
                  <li><a href="#" className='font-outfit text-black'>Shop</a></li>
                  <li><a href="#" className='font-outfit text-black'>For Men</a></li>
                  <li><a href="#" className='font-outfit text-black'>For Women</a></li>
                  <li><a href="#" className='font-outfit text-black'>Collection</a></li>
                  <li><a href="#" className='font-outfit text-black'>Gift Set</a></li>
                </ul>
              </Col>

              {/* Quick Links */}
              <Col xs={24} md={6}>
                <h3 className="font-semibold mb-4 text-black font-syne">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className='hover:text-white-500 font-outfit text-black'>Terms & Conditions</a></li>
                  <li><a href="#" className='hover:text-white-500 font-outfit text-black'>Privacy Policy</a></li>
                  <li><a href="#" className='hover:text-white-500 font-outfit text-black'>Return Policy</a></li>
                  <li><a href="#" className='hover:text-white-500 font-outfit text-black'>About</a></li>
                  <li><a href="#" className='hover:text-white-500 font-outfit text-black'>Contact</a></li>
                </ul>
              </Col>

              {/* Contact Info */}
              <Col xs={24} md={6}>
                <h3 className="font-semibold mb-4 text-black font-syne">Reach Us Out</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center font-outfit text-black"><FaMapMarkerAlt className="mr-2" /><a href="/"> 123 Avenue Wilson Street, Springfield, WY</a></li>
                  <li className="flex items-center font-outfit text-black"><FaEnvelope className="mr-2" /><a href="/"> bluewaterfragrances@info.com</a></li>
                  <li className="flex items-center font-outfit text-black"><FaPhoneAlt className="mr-2" /> <a href="/">+1 123 456 7890</a></li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* Bottom Bar */}
          <div className="bg-black text-gray-400 text-sm text-center py-4 border-t border-gray-700 flex flex-row justify-between items-center px-4">
            <p className='font-outfit'>© 2025 Copyright | Blue Water Fragrances | All Rights Reserved</p>
            <p className='font-outfit'>
              Powered by <span className="text-white font-semibold"><a href="https://designversestudios.com/">Design Verse Studios</a></span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
