import { useState, useEffect } from 'react';
import { 
  HeroData, 
  LayananData, 
  KomisarisDirekturData, 
  VisiMisiData, 
  KoneksiWilayahData, 
  PerusahaanDipercayaData, 
  TentangKamiData 
} from '../types';

// Default data fallback
const defaultData = {
  kontenLayanan: {
    "default": {
      title: "Layanan Default",
      desc: "Deskripsi layanan default",
      image: "default.jpg"
    }
  },
  kontenKomisarisDirektur: {
    komisaris: {
      nama: "Nama Komisaris",
      jabatan: "Komisaris",
      desc: "Deskripsi komisaris",
      image: "https://via.placeholder.com/300"
    },
    direktur: {
      nama: "Nama Direktur",
      jabatan: "Direktur", 
      desc: "Deskripsi direktur",
      image: "https://via.placeholder.com/300"
    }
  },
  kontenVisiMisi: {
    visi: "Visi default perusahaan",
    misi: ["Misi 1", "Misi 2", "Misi 3"]
  },
  kontenKoneksiWilayah: {
    judul: "Koneksi Wilayah",
    deskripsi: "Deskripsi koneksi wilayah",
    image: "https://via.placeholder.com/600x400"
  },
  kontenPerusahaanDipercaya: {
    judul: "Perusahaan Dipercaya",
    logo: [
      { nama: "Partner 1", image: undefined },
      { nama: "Partner 2", image: undefined }
    ]
  },
  kontenTentangKami: {
    judul: "Tentang Kami",
    image: "https://via.placeholder.com/600x400",
    paragraf: ["Paragraf tentang kami 1", "Paragraf tentang kami 2"]
  }
};

const defaultHeroData: HeroData = {
  background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80",
  overlay: 0.45,
  title: "Senantiasa Membantu",
  subtitle: "Argenta Teknika Intramas siap membantu anda dalam penyediaan kebutuhan bisnis."
};

export function useApiData() {
  const [kontenHero, setKontenHero] = useState<HeroData | HeroData[]>(defaultHeroData);
  const [kontenLayanan, setKontenLayanan] = useState<{ [key: string]: LayananData }>(defaultData.kontenLayanan);
  const [kontenKomisarisDirektur, setKontenKomisarisDirektur] = useState<KomisarisDirekturData>(defaultData.kontenKomisarisDirektur);
  const [kontenVisiMisi, setKontenVisiMisi] = useState<VisiMisiData>(defaultData.kontenVisiMisi);
  const [kontenKoneksiWilayah, setKontenKoneksiWilayah] = useState<KoneksiWilayahData>(defaultData.kontenKoneksiWilayah);
  const [kontenPerusahaanDipercaya, setKontenPerusahaanDipercaya] = useState<PerusahaanDipercayaData>(defaultData.kontenPerusahaanDipercaya);
  const [kontenTentangKami, setKontenTentangKami] = useState<TentangKamiData>(defaultData.kontenTentangKami);
  const [loading, setLoading] = useState(true);

  // Firebase cache functions
  const setCacheToFirebase = async (name: string, value: any, minutes: number) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const cacheData = {
          data: value,
          timestamp: Date.now(),
          expiry: Date.now() + (minutes * 60 * 1000)
        };
        localStorage.setItem(name, JSON.stringify(cacheData));
      }
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  };

  const getCacheFromFirebase = async (name: string) => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const cachedData = localStorage.getItem(name);
        if (cachedData) {
          const parsed = JSON.parse(cachedData);
          if (Date.now() > parsed.expiry) {
            localStorage.removeItem(name);
            return null;
          }
          return parsed.data;
        }
      }
      return null;
    } catch (error) {
      console.error('Error getting cache:', error);
      return null;
    }
  };

  const loadKontenJSON = async () => {
    try {
      setLoading(true);
      
      // Check cache first
      const cachedData = await getCacheFromFirebase('argentaData');
      
      if (cachedData) {
        console.log('Using cached data');
        updateStateFromData(cachedData);
        setLoading(false);
        return;
      }

      // Fetch from API
      console.log('Fetching from API');
      const res = await fetch('https://allhub.progesio.my.id/api/hub/argenta/index');
      
      if (!res.ok) throw new Error('Failed to fetch data from API');
      
      const response = await res.json();
      
      if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
        throw new Error('Invalid API response format');
      }

      const data = response.data[0];
      updateStateFromData(data);
      
      // Cache the data
      await setCacheToFirebase('argentaData', data, 1);
      
      console.log('Data loaded successfully:', data);
      
    } catch (error) {
      console.error('Error loading API data:', error);
      // Use default data on error
      updateStateFromData(defaultData);
    } finally {
      setLoading(false);
    }
  };

  const updateStateFromData = (data: any) => {
    setKontenHero(data.kontenHero || defaultHeroData);
    setKontenLayanan(data.kontenLayanan || defaultData.kontenLayanan);
    setKontenKomisarisDirektur(data.kontenKomisarisDirektur || defaultData.kontenKomisarisDirektur);
    setKontenVisiMisi(data.kontenVisiMisi || defaultData.kontenVisiMisi);
    setKontenKoneksiWilayah(data.kontenKoneksiWilayah || defaultData.kontenKoneksiWilayah);
    setKontenPerusahaanDipercaya(data.kontenPerusahaanDipercaya || defaultData.kontenPerusahaanDipercaya);
    setKontenTentangKami(data.kontenTentangKami || defaultData.kontenTentangKami);
  };

  useEffect(() => {
    loadKontenJSON();
  }, []);

  return {
    kontenHero,
    kontenLayanan,
    kontenKomisarisDirektur,
    kontenVisiMisi,
    kontenKoneksiWilayah,
    kontenPerusahaanDipercaya,
    kontenTentangKami,
    loading,
    reload: loadKontenJSON
  };
}
