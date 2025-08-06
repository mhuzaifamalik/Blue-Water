import React from 'react';
import { Row, Col } from 'antd';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

function Form() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <Row gutter={[32, 32]} align="middle" justify="space-between">
          {/* Left Section - Title & Social */}
          <Col xs={24} md={10}>
            <h1 className="text-[184px] font-bold font-syne bg-[linear-gradient(90deg,_rgba(67,170,214,1)_80%,_rgba(0,0,0,1)_100%)]  bg-clip-text text-transparent">
              Let’s<br />
              <span className="font-syne text-[184px] bg-[linear-gradient(90deg,_rgba(67,170,214,1)_80%,_rgba(0,0,0,1)_100%)]  bg-clip-text text-transparent">
                Talk
              </span>
            </h1>
            <div className="mt-6 flex gap-4 text-blue-400 text-xl">
              <a href="#"><RiInstagramFill /></a>
              <a href="#"><FaFacebook /></a>
            </div>
          </Col>

          {/* Right Section - Form */}
          <Col xs={24} md={14}>
            <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <form className="space-y-6 font-outfit">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={12}>
                    <label className="block mb-1 text-sm font-semibold">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name ..."
                      className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <label className="block mb-1 text-sm font-semibold">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name ..."
                      className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <label className="block mb-1 text-sm font-semibold">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email Address ..."
                      className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Col>
                  <Col xs={24} md={12}>
                    <label className="block mb-1 text-sm font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number ..."
                      className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Col>
                </Row>

                <div>
                  <label className="block mb-1 text-sm font-semibold">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Enter Your Message ..."
                    className="w-full p-3 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <p className="text-sm text-gray-400">
                  We respect your privacy — your email address is safe with us. We won’t sell it,
                  trade it, or accidentally leave it on a café napkin. No spam, no nonsense — just
                  great scents.
                </p>

                <button
                  type="submit"
                  className="bg-[linear-gradient(90deg,_rgba(67,170,214,1)_10%,_rgba(0,0,0,1)_100%)] from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all"
                >
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Form;
