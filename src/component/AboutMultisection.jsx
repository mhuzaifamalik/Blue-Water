import React from 'react'
import { Row, Col } from 'antd';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Img from '../images/products/product-2.png';
import Img1 from '../images/products/product-3.png';
import Img2 from '../images/products/banner-products.png';

function AboutMultisection() {
    return (
        <div>
            <section className="banner bg-black">
                <div className="aboutFirstsec">
                    <div className="container mx-auto px-4 pt-20 pb-20">
                        <Row align="middle" justify="center" className='pt-20 pb-20' >
                            <Col span={12}>
                                <div className="content-sec">
                                    <h2 className='  w-[580px] font-syne text-4xl font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent'>Born From the Depths of Nature</h2>
                                    <p className='text-[15px] font-outfit  text-white pt-[25px] pt-5 pb-5 text-white w-[480px]'>Water is life, flow, and freedom — and it inspires everything we create. Just like the ocean carries both serenity and mystery, our fragrances capture duality: freshness and depth, simplicity and sophistication, presence and subtlety. Each scent is designed to awaken a memory, spark an emotion, and celebrate the beauty of self-expression.</p>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="about-first-sec-img">
                                    <img src={Img} alt="About Us" />
                                </div>
                            </Col>
                        </Row>
                        <Row align="middle" justify="center" gutter={100} className='pt-20 pb-20'>

                            <Col span={12}>
                                <div className="about-first-sec-img">
                                    <img src={Img1} alt="About Us" />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="content-sec">
                                    <h2 className='  w-[580px] font-syne text-4xl font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent'>The Art of Perfumery</h2>
                                    <p className='text-[15px] font-outfit  text-white pt-[25px] pt-5 pb-5 text-white w-[480px]'>At Blue Water Fragrances, we believe that creating a perfume is an art. Our master perfumers carefully source rare and high-quality ingredients from across the world — from fresh Mediterranean citrus to deep Middle Eastern oud and delicate florals from Asia. Each fragrance is blended with precision to ensure balance, harmony, and a long-lasting impression. With every spray, you experience not just a fragrance, but a carefully crafted story.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="text-center pt-10">
                                    <h2  className=' w-[100%] font-syne text-5xl font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent text-center'> More Than a Scent, An Identity</h2>
                                    <p className='text-[16px] font-outfit  text-white pt-[25px] pt-5 pb-5 text-white w-[90%] m-auto'>Wearing a fragrance is deeply personal. It reflects who you are, how you feel, and the impression you leave behind. That’s why Blue Water Fragrances designs perfumes for every mood, moment, and occasion. Whether you want to command attention with bold, masculine notes, express elegance with feminine florals, or embrace versatility unique blends — our collection ensures there’s a scent that feels uniquely yours.</p>
                                    <img src={Img2  } alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMultisection
