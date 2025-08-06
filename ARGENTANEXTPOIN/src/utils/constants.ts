// utils/constants.ts
export const SITE_CONFIG = {
  name: 'Argenta Teknika Intramas',
  description: 'Senantiasa Membantu dalam penyediaan kebutuhan bisnis',
  url: 'https://argenta.co.id',
  contact: {
    phone: '0821-3345-7898',
    email: 'ArgentaIntramas@gmail.com',
    address: 'Jl. Administrasi Negara I No. 30 Rt. 06 Rw. 07 Bend Hilir'
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#'
  }
};

export const API_ENDPOINTS = {
  base: 'https://allhub.progesio.my.id/api/hub/argenta',
  index: '/index',
  map: '/mapubg'
};

export const CACHE_KEYS = {
  argentaData: 'argentaData',
  karirData: 'karirData',
  beritaData: 'beritaData'
};

export const CACHE_DURATION = {
  short: 1, // 1 minute
  medium: 5, // 5 minutes
  long: 30 // 30 minutes
};
