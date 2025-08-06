import { KoneksiWilayahData } from '../types';

interface KoneksiWilayahSectionProps {
  data: KoneksiWilayahData;
}

export default function KoneksiWilayahSection({ data }: KoneksiWilayahSectionProps) {
  return (
    <section className="bg-gradient-to-b from-red-900 via-black to-black text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-widest">{data.judul}</h2>
        <p className="mb-8 max-w-2xl mx-auto">{data.deskripsi}</p>
        <div className="w-full h-96 md:h-[700px] lg:h-[800px] rounded-lg overflow-hidden shadow-2xl border border-red-700">
          <iframe 
            src="/dector/Neo.html" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen
            title="Peta Koneksi Wilayah"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
