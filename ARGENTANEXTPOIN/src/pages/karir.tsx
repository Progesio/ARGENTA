import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingOverlay from '../components/LoadingOverlay';

export default function Karir() {
  const [loading, setLoading] = useState(true);
  const [karirData, setKarirData] = useState([]);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setKarirData([
        {
          id: 1,
          posisi: "Software Engineer",
          departemen: "IT",
          lokasi: "Jakarta",
          tipe: "Full Time",
          deskripsi: "Bertanggung jawab dalam pengembangan aplikasi web dan mobile.",
          requirements: [
            "Minimal S1 Teknik Informatika atau setara",
            "Pengalaman 2+ tahun dalam web development",
            "Menguasai React/Next.js dan Node.js",
            "Familiar dengan database SQL dan NoSQL"
          ]
        },
        {
          id: 2,
          posisi: "Business Analyst",
          departemen: "Business Development",
          lokasi: "Surabaya",
          tipe: "Full Time",
          deskripsi: "Menganalisis kebutuhan bisnis dan memberikan solusi yang tepat.",
          requirements: [
            "Minimal S1 Ekonomi/Manajemen atau setara",
            "Pengalaman 1+ tahun sebagai Business Analyst",
            "Kemampuan analisis yang kuat",
            "Komunikasi yang baik"
          ]
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Karir - Argenta</title>
        <meta name="description" content="Bergabunglah dengan tim Argenta Teknika Intramas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <LoadingOverlay isLoading={loading} />

      <main className="min-h-screen">
        <Navbar />
        
        <section className="pt-24 pb-12 bg-gradient-to-b from-red-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center text-white mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Karir</h1>
              <p className="text-xl">Bergabunglah dengan Tim Argenta</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Lowongan Kerja</h2>
            
            {karirData.length === 0 ? (
              <div className="text-center">
                <p className="text-lg text-gray-400">Saat ini tidak ada lowongan kerja yang tersedia.</p>
              </div>
            ) : (
              <div className="grid gap-6 max-w-4xl mx-auto">
                {karirData.map((job) => (
                  <div key={job.id} className="bg-red-800 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{job.posisi}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-red-900 px-3 py-1 rounded text-sm">{job.departemen}</span>
                          <span className="bg-gray-700 px-3 py-1 rounded text-sm">{job.lokasi}</span>
                          <span className="bg-blue-700 px-3 py-1 rounded text-sm">{job.tipe}</span>
                        </div>
                      </div>
                      <button className="bg-white text-red-900 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
                        Lamar Sekarang
                      </button>
                    </div>
                    
                    <p className="text-gray-200 mb-4">{job.deskripsi}</p>
                    
                    <div>
                      <h4 className="font-bold mb-2">Persyaratan:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-200">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
