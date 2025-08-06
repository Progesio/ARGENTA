import { VisiMisiData } from '../types';

interface VisiMisiSectionProps {
  data: VisiMisiData;
}

export default function VisiMisiSection({ data }: VisiMisiSectionProps) {
  return (
    <section className="container mx-auto my-12 px-4 text-center text-white">
      <h2 className="text-3xl font-bold mb-8 tracking-widest">VISI & MISI</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto text-left">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 tracking-wide">Visi</h3>
          <p className="text-base leading-relaxed whitespace-pre-line">{data.visi}</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 tracking-wide">Misi</h3>
          <ol className="list-decimal list-inside space-y-2 text-base leading-relaxed">
            {data.misi.map((misi, index) => (
              <li key={index}>{misi}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
