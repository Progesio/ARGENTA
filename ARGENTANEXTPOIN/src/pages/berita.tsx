import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingOverlay from '../components/LoadingOverlay';

export default function Berita() {
  const [loading, setLoading] = useState(true);
  const [beritaData, setBeritaData] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setBeritaData([
        {
          id: 1,
          judul: "Ekspansi Layanan Argenta di Wilayah Jawa Tengah",
          tanggal: "2025-08-05",
          kategori: "Company News",
          ringkasan: "Argenta Teknika Intramas memperluas jangkauan layanannya dengan membuka cabang baru di Semarang dan Solo.",
          gambar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        },
        {
          id: 2,
          judul: "Inovasi Teknologi Terbaru dalam Industri Konstruksi",
          tanggal: "2025-08-03",
          kategori: "Technology",
          ringkasan: "Melihat perkembangan terbaru teknologi konstruksi yang dapat meningkatkan efisiensi dan kualitas proyek.",
          gambar: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        },
        {
          id: 3,
          judul: "Kemitraan Strategis dengan Perusahaan Multinasional",
          tanggal: "2025-08-01",
          kategori: "Partnership",
          ringkasan: "Argenta menjalin kemitraan strategis untuk memperkuat posisi di pasar regional.",
          gambar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Berita & Artikel - Argenta</title>
        <meta name="description" content="Berita terbaru dan artikel dari Argenta Teknika Intramas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LoadingOverlay isLoading={loading} />

      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-b from-red-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Artikel</h1>
              <p className="text-xl">Informasi Terbaru dari Argenta</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {beritaData.map((artikel) => (
                <article key={artikel.id} className="bg-red-800 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={artikel.gambar} 
                    alt={artikel.judul}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-red-900 px-3 py-1 rounded text-sm">{artikel.kategori}</span>
                      <time className="text-gray-300 text-sm">{new Date(artikel.tanggal).toLocaleDateString('id-ID')}</time>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{artikel.judul}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-3">{artikel.ringkasan}</p>
                    
                    <button className="bg-white text-red-900 px-4 py-2 rounded font-medium hover:bg-gray-200 transition">
                      Baca Selengkapnya
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {beritaData.length === 0 && (
              <div className="text-center">
                <p className="text-lg text-gray-400">Belum ada artikel yang tersedia.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
