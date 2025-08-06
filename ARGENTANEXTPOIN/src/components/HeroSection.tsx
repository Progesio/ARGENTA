import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { HeroData } from '../types';
import { getImageUrl } from '../utils/imageUtils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface HeroSectionProps {
  heroData: HeroData | HeroData[];
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[80vh] bg-red-900"></div>;
  }

  const slides = Array.isArray(heroData) ? heroData : [heroData];

  return (
    <section className="relative h-[80vh] mt-16">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        className="h-full"
      >
        {slides.map((hero, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative h-full flex items-center justify-center text-center px-4 bg-cover bg-center"
              style={{ backgroundImage: `url('${getImageUrl(hero.background)}')` }}
            >
              <div 
                className="absolute inset-0 bg-black" 
                style={{ opacity: hero.overlay }}
              ></div>
              <div className="relative max-w-xl text-white z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
                  {hero.title}
                </h1>
                <div className="text-lg md:text-xl font-normal animate-fade-in">
                  {hero.subtitle}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
