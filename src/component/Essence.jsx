import React, { useRef, useEffect } from 'react';
import { Row, Col } from 'antd';
import Img from '../images/esscess.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Essence() {
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <div className='bg-black'>
            <div className="container mx-auto px-4 pt-20 pb-20">
                <Row gutter={50} className="essence-row motion-flex align-items-center">
                    <Col span={12}>
                        <div className="banner-images" ref={imageRef}>
                            <img src={Img} alt="Essence" />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="banner-text" ref={textRef}>
                            <h2 className='font-syne text-5xl text-start font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent w-[600px]'>
                                The Essence of Blue Water
                            </h2>
                            <p className='text-white font-outfit pt-5 text-[20px] pb-5'>
                                Inspired by the purity of oceans and the mystery of distant lands, Blue Water Fragrances brings you artisanal perfumes designed to captivate. Each bottle is a journey—blending rare ingredients, craftsmanship, and unforgettable moments.
                            </p>
                            <button className="bg-white font-syne w-fit p-3 font-thin rounded-full outline-none flex items-center justify-between gap-2 hover:bg-[linear-gradient(90deg,_rgba(67,170,214,1)_0%,_rgba(0,0,0,1)_100%)] hover:text-white transition-all duration-300">
                                <span className="font-medium hover:text-white">Shop the Collection</span>
                                <IoIosArrowRoundForward className="text-xl" />
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Essence;
