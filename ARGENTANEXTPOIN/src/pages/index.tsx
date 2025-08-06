import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TentangKamiSection from '../components/TentangKamiSection';
import VisiMisiSection from '../components/VisiMisiSection';
import KomisarisDirekturSection from '../components/KomisarisDirekturSection';
import KoneksiWilayahSection from '../components/KoneksiWilayahSection';
import LayananSection from '../components/LayananSection';
import PerusahaanDipercayaSection from '../components/PerusahaanDipercayaSection';
import Footer from '../components/Footer';
import LoadingOverlay from '../components/LoadingOverlay';
import { useApiData } from '../hooks/useApiData';

export default function Home() {
  const {
    kontenHero,
    kontenLayanan,
    kontenKomisarisDirektur,
    kontenVisiMisi,
    kontenKoneksiWilayah,
    kontenPerusahaanDipercaya,
    kontenTentangKami,
    loading
  } = useApiData();

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Hide loading after initial mount and data is loaded
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <Head>
        <title>Argenta Landing Page</title>
        <meta name="description" content="Argenta Teknika Intramas - Senantiasa Membantu dalam penyediaan kebutuhan bisnis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoadingOverlay isLoading={pageLoading || loading} />

      <main className="min-h-screen">
        <Navbar />
        
        <HeroSection heroData={kontenHero} />
        
        <TentangKamiSection data={kontenTentangKami} />
        
        <VisiMisiSection data={kontenVisiMisi} />
        
        <KomisarisDirekturSection data={kontenKomisarisDirektur} />
        
        <KoneksiWilayahSection data={kontenKoneksiWilayah} />
        
        <LayananSection data={kontenLayanan} />
        
        <PerusahaanDipercayaSection data={kontenPerusahaanDipercaya} />
        
        <Footer />
      </main>
    </>
  );
}
