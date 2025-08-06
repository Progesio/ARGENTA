import { KomisarisDirekturData } from '../types';
import { getImageUrl } from '../utils/imageUtils';

interface KomisarisDirekturSectionProps {
  data: KomisarisDirekturData;
}

export default function KomisarisDirekturSection({ data }: KomisarisDirekturSectionProps) {
  // Cek apakah data komisaris dan direktur ada dan tidak null
  if (!data || (!data.komisaris && !data.direktur)) {
    return (
      <section className="bg-gradient-to-b from-red-900 via-black to-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 tracking-widest">KOMISARIS DAN DIREKTUR</h2>
          <p className="text-lg">Data komisaris dan direktur sedang tidak tersedia.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-red-900 via-black to-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 tracking-widest">KOMISARIS DAN DIREKTUR</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 max-w-5xl mx-auto text-center">
          {data.komisaris && (
            <div className="md:w-1/2">
              <h3 className="text-4xl font-normal mb-2">Komisaris</h3>
              <div className="h-3 w-3/4 bg-red-900 mx-auto mb-6"></div>
              <div className="relative group mx-auto w-72 h-72 rounded overflow-hidden shadow-lg">
                <img 
                  src={getImageUrl(data.komisaris.image)} 
                  alt="Komisaris" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-125" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-900/90 to-transparent p-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-bold text-white">{data.komisaris.nama}</div>
                  <div className="text-sm text-white">{data.komisaris.jabatan}</div>
                  <div className="text-xs text-white mt-1">{data.komisaris.desc}</div>
                </div>
              </div>
            </div>
          )}
          {data.direktur && (
            <div className="md:w-1/2">
              <h3 className="text-4xl font-normal mb-2">Direktur</h3>
              <div className="h-3 w-3/4 bg-red-900 mx-auto mb-6"></div>
              <div className="relative group mx-auto w-72 h-72 rounded overflow-hidden shadow-lg">
                <img 
                  src={getImageUrl(data.direktur.image)} 
                  alt="Direktur" 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-125" 
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-red-900/90 to-transparent p-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-lg font-bold text-white">{data.direktur.nama}</div>
                  <div className="text-sm text-white">{data.direktur.jabatan}</div>
                  <div className="text-xs text-white mt-1">{data.direktur.desc}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
