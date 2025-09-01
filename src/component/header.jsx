import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ImgPopup from '../images/popup.jpg'
import { MdPerson, MdEmail, MdPhone, MdCampaign } from 'react-icons/md';

import { GoHeartFill } from "react-icons/go";
import { Button, Modal } from 'antd';
import GooeyNav from './GooeyNav';
import Img1 from '../images/logo.png'
import { IoMdCart } from "react-icons/io";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CiSearch } from "react-icons/ci";


function Header() {

  const [modal2Open, setModal2Open] = useState(false);
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact ', href: '/contact' }

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


      </div>
      <div className="container mx-auto px-4">
        <nav className='absolute flex justify-between items-center py-4 pt-[30px] w-full max-w-[95rem] mx-auto gap-[115px]'>
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
             

              <Button type="primary" onClick={() => setModal2Open(true)}>
                <MdPerson />
              </Button>
              <Modal
                title={null}  
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
                width={900} 
                footer={null}
              >
                <Row gutter={0} className="bg-white  overflow-hidden">
                  {/* Left Image */}
                  <Col span={12}>
                    <div className="main-popup-pic w-full h-full">
                      <img src={ImgPopup} alt="img" className="w-full h-full object-cover" />
                    </div>
                  </Col>

                  {/* Right Form */}
                  <Col span={12} className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2 font-syne ">Create Your Account</h2>
                    <p className="text-gray-600 mb-6 font-outfit  ">
                      Unlock exclusive offers, early access to new launches, and personalized recommendations.
                    </p>

                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Enter Your Full Name ..."
                        className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 font-outfit"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your Email Address ..."
                        className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 font-outfit"
                      />
                      <input
                        type="password"
                        placeholder="Enter Your Password ..."
                        className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 font-outfit"
                      />
                      <input
                        type="password"
                        placeholder="Confirm Your Password ..."
                        className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 font-outfit"
                      />

                      <p className="text-xs text-gray-500 mt-2">
                        By signing up, you agree to our <span className="underline font-outfit">Terms & Conditions</span> and <span className="underline font-outfit">Privacy Policy</span>.
                      </p>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition font-outfit"
                      >
                        Sign Up <ArrowRightOutlined />
                      </button>
                    </form>
                  </Col>
                </Row>

              </Modal>
            </li>
            <li>
              {/* <a href="/" className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300'>< GoHeartFill /></a> */}
            </li>
            <li>
              <a href="/" className='text-black-600 text-2xl font-bold hover:text-blue-800 transition-colors duration-300'>< IoMdCart /></a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Gooey Navigation */}

    </header>
  );
}

export default Header;
