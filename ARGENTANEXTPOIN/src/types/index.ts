// types/index.ts
export interface HeroData {
  background: string;
  overlay: number;
  title: string;
  subtitle: string;
}

export interface LayananData {
  title: string;
  desc: string;
  image?: string;
}

export interface PersonData {
  nama: string;
  jabatan: string;
  desc: string;
  image: string;
}

export interface KomisarisDirekturData {
  komisaris?: PersonData;
  direktur?: PersonData;
}

export interface VisiMisiData {
  visi: string;
  misi: string[];
}

export interface KoneksiWilayahData {
  judul: string;
  deskripsi: string;
  image?: string;
}

export interface LogoData {
  nama: string;
  image?: string;
}

export interface PerusahaanDipercayaData {
  judul: string;
  logo: LogoData[];
}

export interface TentangKamiData {
  judul: string;
  image: string;
  paragraf: string[];
}

export interface ApiResponse {
  data: {
    kontenHero?: HeroData | HeroData[];
    kontenLayanan?: { [key: string]: LayananData };
    kontenKomisarisDirektur?: KomisarisDirekturData;
    kontenVisiMisi?: VisiMisiData;
    kontenKoneksiWilayah?: KoneksiWilayahData;
    kontenPerusahaanDipercaya?: PerusahaanDipercayaData;
    kontenTentangKami?: TentangKamiData;
  }[];
}
