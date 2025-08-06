import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import userImg from '../images/testimonial-user.png'; // replace with your image path

const testimonials = [
  {
    name: 'Lina M.',
    image: userImg,
    quote: `I initially bought a bottle from Blue Water Fragrances as a gift for my best friend—but the moment I opened the package and tested it, I fell in love and kept it for myself! There's something so luxurious and calming about the scent. It doesn't just smell good—it tells a story. Every time I wear it, I feel transported. The bottle design is elegant, the packaging is thoughtful, and the experience overall feels premium. I've since ordered two more scents and plan to gift them to everyone I love.`,
  },
  {
    name: 'Lina M.',
    image: userImg,
    quote: `I initially bought a bottle from Blue Water Fragrances as a gift for my best friend—but the moment I opened the package and tested it, I fell in love and kept it for myself! There's something so luxurious and calming about the scent. It doesn't just smell good—it tells a story. Every time I wear it, I feel transported. The bottle design is elegant, the packaging is thoughtful, and the experience overall feels premium. I've since ordered two more scents and plan to gift them to everyone I love.`,
  },
   {
    name: 'Lina M.',
    image: userImg,
    quote: `I initially bought a bottle from Blue Water Fragrances as a gift for my best friend—but the moment I opened the package and tested it, I fell in love and kept it for myself! There's something so luxurious and calming about the scent. It doesn't just smell good—it tells a story. Every time I wear it, I feel transported. The bottle design is elegant, the packaging is thoughtful, and the experience overall feels premium. I've since ordered two more scents and plan to gift them to everyone I love.`,
  },
  // You can add more testimonials here
];

function Testimonials({ tilte, tagline }) {
  return (
    <div className="bg-black pt-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="testimonials">
          <h2 className="font-syne text-7xl text-center font-bold bg-[linear-gradient(90deg,_rgba(67,170,214,1)_60%,_rgba(0,0,0,1)_100%)] bg-clip-text text-transparent max-w-[800px] mx-auto">
            {tilte}
          </h2>
          <p className="font-outfit text-center text-white pt-6 max-w-[800px] mx-auto">
            {tagline}
          </p>

          <div className="mt-16 relative">
            <Swiper
              modules={[Navigation]}
              navigation
              slidesPerView={1}
              loop
              className="testimonial-swiper"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex bg-[#0d0d0d] border border-[#43aad6] rounded-xl p-6 md:flex-row flex-col items-center max-w-5xl mx-auto gap-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[200px] h-[200px] object-cover rounded-lg"
                    />
                    <div className="text-white">
                      <p className="font-outfit text-lg leading-relaxed mb-4">
                        “{item.quote}”
                      </p>
                      <h3 className="text-[#43aad6] font-syns font-bold text-xl font-syne">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Optional custom nav styles */}
            <style>{`
              .swiper-button-next,
              .swiper-button-prev {
                background: white;
                color: black;
                border-radius: 9999px;
                width: 40px;
                height: 40px;
              }

              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px;
              }

              .swiper-button-prev {
                left: 5px;
              }

              .swiper-button-next {
                right: 5px;
              }

              @media (max-width: 768px) {
                .swiper-button-next,
                .swiper-button-prev {
                  display: none;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
