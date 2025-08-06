import { TentangKamiData } from '../types';
import { getImageUrl } from '../utils/imageUtils';

interface TentangKamiSectionProps {
  data: TentangKamiData;
}

export default function TentangKamiSection({ data }: TentangKamiSectionProps) {
  return (
    <section className="container mx-auto my-12 bg-red-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <img 
          src={getImageUrl(data.image)} 
          alt="Meeting room" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-red-900/90 to-transparent"></div>
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center text-white">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">{data.judul}</h2>
        {data.paragraf.map((paragraf, index) => (
          <p key={index} className="mb-4 text-base leading-relaxed">
            {paragraf}
          </p>
        ))}
      </div>
    </section>
  );
}
