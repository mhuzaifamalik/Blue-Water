import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import Card from './card'; // Your reusable prop-based Card component
import img from '../images/products/img-product.png';

function Crafted( {image,title,tagline,btn}) {
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      gsap.fromTo(
        slide,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: slide,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const cardData = [
    {
      title: 'Valentino',
      oldPrice: '$100.00',
      newPrice: '$75.00',
      image: img,
      volumes: ['50ml', '100ml'],
    },
    {
      title: 'Gucci Oud',
      oldPrice: '$110.00',
      newPrice: '$89.00',
      image: img,
      volumes: ['30ml', '100ml'],
    },
    {
      title: 'Dior Sauvage',
      oldPrice: '$130.00',
      newPrice: '$95.00',
      image: img,
      volumes: ['60ml', '120ml'],
    },
    {
      title: 'Bleu de Chanel',
      oldPrice: '$140.00',
      newPrice: '$105.00',
      image: img,
      volumes: ['50ml', '100ml'],
    }
  ];

  return (
    <div className="main-droper bg-black pt-20 pb-20">
      <div className="conatiner mx-auto px-4">
        <Row gutter={20} className="crafted-row motion-flex  align-items-center">
          <Col span={8}>
            <div className="text-1">
              <h1 className='font-syne text-4xl font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent'>
                {title}
              </h1>
              <p className='text-[15px] font-outfit  text-white pt-[25px] pt-5 pb-5 text-white w-[480px]'>
               {tagline}
              </p>
              <button className="bg-white font-syne w-fit p-3 font-thin rounded-full outline-none flex items-center justify-between gap-2 hover:bg-[linear-gradient(90deg,_rgba(67,170,214,1)_0%,_rgba(0,0,0,1)_100%)] hover:text-white transition-all duration-300">
                <span className="font-medium hover:text-white">{btn}</span>
                <IoIosArrowRoundForward className="text-xl" />
              </button>
            </div>
          </Col>

          <Col span={16} className=''>
            <Swiper
              modules={[Navigation]}
              navigation
              margin={20}
              width={1000}
              slidesPerView={3}
              className="crafted-swiper"
            >
              {cardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div ref={(el) => (slidesRef.current[index] = el)}>
                    <Card
                      img={img}
                      title={item.title}
                      oldPrice={item.oldPrice}
                      newPrice={item.newPrice}
                      image={item.image}
                      volumes={item.volumes}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Crafted;
