import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function callToAction() {
    return (
        <div>
            <div className="CallAction bg-black py-10">
               <div className="container mx-auto px-4">
               <div className="main-call-action bg-[linear-gradient(90deg,_rgba(67,170,214,1)_10%,_rgba(0,0,0,1)_100%)] rounded-lg">
                  <ul className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center py-10 justify-center items-center color-white'>
                    <li className='text-center flex flex-col justify-center items-center'>
                            <a  className='text-white font-syne flex flex-col justify-center items-center' target='__blank'   href="mailto:support@bluewaterfragrances.com">
                        <span className='text-white text-4xl mb-5'><FaEnvelope /></span>
                    support@bluewaterfragrances.com</a>

                    </li >
                     <li className='text-center flex flex-col justify-center items-center'>
                         <a className='text-white font-syne flex flex-col justify-center items-center' target='__blank'  href="tel:+1 123 456 7890">
                        <span className='text-white text-4xl mb-5'><FaPhoneAlt /></span>
                       +1 123 456 7890</a>

                    </li>
                     <li className='text-center flex flex-col justify-center items-center '>
                         <a className='text-white font-syne flex flex-col justify-center items-center' target='__blank' href="https://maps.app.goo.gl/fQgXEskatzqqkd3G8">
                        <span className='text-white text-4xl mb-5'><FaLocationDot /></span>
                       123 Avenue Wilson Street, Springfield, WY</a>

                    </li>
                </ul>
               </div>
               </div>
            </div>
        </div>
        

    )
}

export default callToAction
