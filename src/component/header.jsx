import React from 'react';

import { MdPerson , MdEmail, MdPhone, MdCampaign } from 'react-icons/md';
import { GoHeartFill } from "react-icons/go";

import GooeyNav from './GooeyNav'; // Assuming this is the GooeyNav component
import Img1 from '../images/logo.png'
import { IoMdCart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Header() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'For Men', href: '/shop' },
    { label: 'For Women', href: '/shop' },
    { label: 'Collections', href: '/shop' },
    { label: 'Gift Sets', href: '/shop' },
    { label: 'Contact ', href: '/shop' }

  ]
  return (
    <header className="bg-[#000] shadow-md rounded-bl-[2vw] rounded-br-[2vw] ">
      {/* Top Contact Bar */}
      <div className="container mx-auto px-4">
        <nav className=" header-motion flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0 md:space-x-8 py-4 2xl:max-w-[1536px] 2xl:mx-auto ">
          <a
            href="mailto:bluewaterfragrances@info.com"
            className="font-outfit flex items-center text-white hover:text-brandBlue transition-colors duration-200"
          >
            <MdEmail className="mr-2 text-lg" />
            bluewaterfragrances@info.com
          </a>

          <a
            href="/about"
            className="font-outfit flex items-center text-white hover:text-brandBlue transition-colors duration-200"
          >
            <MdCampaign className="mr-2 text-lg" />
            Flash Sale Alert: Save Up to 40% - Limited Stock
          </a>

          <a
            href="tel:+11234567890"
            className="font-outfit flex items-center text-white hover:text-brandBlue transition-colors duration-200"
          >
            <MdPhone className="mr-2 text-lg" />
            +1 123 456 7890
          </a>
        </nav>
        <nav className='  absolute  flex justify-between items-center py-4 pt-[30px]'>
          <div className="logo">
            <img src={Img1} className='w-60' alt="" />
          </div>
          <ul className='header flex justify-between gap-[1vw] items-center py-5 pl-[30px] font-outfit'>
            <GooeyNav
              className="gooey-nav font-outfit"
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={300}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          
          </ul>
          <ul className='flex justify-between gap-[1vw] items-center py-5 pr-[30px] font-outfit pl-[50px]'>
            <li>
              <a className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300' href="/"><CiSearch /></a>
            </li>
            <li>
              <a href="/" className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300'><MdPerson /></a>
            </li>
              <li>
              <a href="/" className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300'>< GoHeartFill  /></a>
            </li>
             <li>
              <a href="/" className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300'>< IoMdCart  /></a>
            </li>
          </ul>
        </nav>
        <div className="div">
          <ul>
            <li>

            </li>
          </ul>
        </div>
      </div>

      {/* Gooey Navigation */}

    </header>
  );
}

export default Header;
