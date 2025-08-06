import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import Card from './card'; // Your prop-based Card component
import img from '../images/products/img-product.png';
import img1 from '../images/products/product1.png';

function Featured({title, tagline}) {
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
      
    },
        {
      title: 'Bleu de Chanel',
      oldPrice: '$140.00',
      newPrice: '$105.00',
      image: img,
      volumes: ['50ml', '100ml'],
      
    },
        {
      title: 'Bleu de Chanel',
      oldPrice: '$140.00',
      newPrice: '$105.00',
      image: img,
      volumes: ['50ml', '100ml'],
      
    },
  ];

  return (
    <div className="bg-black pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="banner-text">
          <h2 className="font-syne text-8xl text-center font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent m-auto w-full max-w-[900px]">
            {title}
          </h2>
          <p className="font-outfit text-center text-white pt-[25px]">
            {tagline}
          </p>
        </div>

        <div className="mt-16 w-full">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={4}
            className="crafted-swiper w-full"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index}>
                <div ref={(el) => (slidesRef.current[index] = el)}>
                  <Card img={img1}
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
        </div>
      </div>
    </div>
  );
}

export default Featured;
