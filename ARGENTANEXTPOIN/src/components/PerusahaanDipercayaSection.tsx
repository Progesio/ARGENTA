import { PerusahaanDipercayaData } from '../types';
import { getImageUrl } from '../utils/imageUtils';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface PerusahaanDipercayaSectionProps {
  data: PerusahaanDipercayaData;
}

export default function PerusahaanDipercayaSection({ data }: PerusahaanDipercayaSectionProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-red-900 py-12 h-96"></div>;
  }

  // Cek apakah data logo ada dan tidak null
  if (!data || !data.logo) {
    return (
      <section className="bg-red-900 py-12">
        <div className="container mx-auto px-4 text-center text-white max-w-6xl">
          <h2 className="text-3xl font-extrabold mb-8 tracking-widest">
            {data?.judul || 'Perusahaan Dipercaya'}
          </h2>
          <p className="text-lg">Data perusahaan mitra sedang tidak tersedia.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-red-900 py-12">
      <div className="container mx-auto px-4 text-center text-white max-w-6xl">
        <h2 className="text-3xl font-extrabold mb-8 tracking-widest">
          <span className="font-extrabold">{data.judul.split(' ')[0]}</span> {data.judul.split(' ').slice(1).join(' ')}
        </h2>
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
          {data.logo.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center rounded-full h-20 w-40 mx-auto">
                {logo.image ? (
                  <img 
                    src={getImageUrl(logo.image)} 
                    alt={logo.nama} 
                    className="h-12 object-contain" 
                  />
                ) : (
                  <span className="text-red-900 font-bold text-lg bg-white rounded px-4 py-2">
                    {logo.nama}
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
