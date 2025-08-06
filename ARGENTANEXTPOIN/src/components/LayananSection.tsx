import { LayananData } from '../types';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface LayananSectionProps {
  data: { [key: string]: LayananData };
}

export default function LayananSection({ data }: LayananSectionProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-black text-white py-12 h-96"></div>;
  }

  const layananList = Object.values(data);

  return (
    <section id="layanan" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 tracking-widest text-center">LAYANAN KAMI</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {layananList.map((layanan, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black rounded shadow-lg grayscale hover:grayscale-0 transition duration-300 ease-in-out cursor-pointer p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <svg className="w-10 h-10 text-red-900 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 7L9 19L3 13"></path>
                  </svg>
                  <h3 className="font-bold uppercase text-lg">{layanan.title}</h3>
                </div>
                <p className="text-sm mb-6 flex-grow">{layanan.desc}</p>
                <button className="self-start bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700 transition flex items-center gap-2">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
