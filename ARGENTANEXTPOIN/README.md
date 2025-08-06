# ARGENTANEXTPOIN

Proyek Next.js untuk website Argenta Teknika Intramas.

## Deskripsi

Website landing page perusahaan Argenta yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS. Website ini menampilkan informasi perusahaan, layanan, visi-misi, dan kontak.

## Fitur

- 🎨 Design responsif dengan Tailwind CSS
- ⚡ Server-side rendering dengan Next.js
- 🔥 TypeScript untuk type safety
- 📱 Mobile-friendly responsive design
- 🎢 Carousel/slider untuk hero section dan layanan
- 🗺️ Integrasi peta untuk koneksi wilayah
- 🔄 API integration untuk konten dinamis
- 💾 Caching system untuk performa optimal

## Teknologi yang Digunakan

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React Components
- **Carousel**: Swiper.js
- **API**: REST API integration
- **Build Tools**: PostCSS, Autoprefixer

## Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## Scripts

- `npm run dev` - Menjalankan development server
- `npm run build` - Build untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## Struktur Proyek

```
ARGENTANEXTPOIN/
├── public/
│   └── dector/
│       └── Neo.html          # Peta interaktif
├── src/
│   ├── components/           # React components
│   ├── hooks/               # Custom hooks
│   ├── pages/               # Next.js pages
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript types
│   └── utils/               # Utility functions
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## API Integration

Website ini terintegrasi dengan API untuk konten dinamis:
- Endpoint: `https://allhub.progesio.my.id/api/hub/argenta/index`
- Cache system untuk performa optimal
- Fallback ke data default jika API tidak tersedia

## Deployment

Untuk deploy ke production:

1. Build project:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

## Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

© 2025 Argenta Teknika Intramas. All rights reserved.
