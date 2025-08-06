export default function Footer() {
  return (
    <footer id="kontak" className="bg-black text-gray-300 mt-12 py-4">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold mb-8 tracking-widest">
          <span className="font-extrabold">Hubungi Kami</span>
        </h2>
      </div>
      <div className="border border-red-900 max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 10-2.828 2.828l4.243 4.243a8 8 0 1111.314-11.314z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Jl. Administrasi Negara I No. 30 Rt. 06 Rw. 07 Bend Hilir</span>
        </div>
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h1l2 2-2 2H3v-4zM21 10h-1l-2 2 2 2h1v-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10v4H7v-4z" />
          </svg>
          <span>0821-3345-7898</span>
        </div>
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h-4m0 0v-4m0 4v4m0-4h4" />
            <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
          </svg>
          <span>ArgentaIntramas@gmail.com</span>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
        <div>
          <div className="flex items-center mb-6 space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 17l10 5 10-5" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12l10 5 10-5" />
            </svg>
            <span className="text-red-900 font-bold text-xl tracking-widest">ARGENTA</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="/berita" className="hover:text-white">Berita</a></li>
            <li><a href="/karir" className="hover:text-white">Karir</a></li>
            <li><a href="#layanan" className="hover:text-white">Layanan</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Lainnya</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#kontak" className="hover:text-white">Hubungi Kami</a></li>
            <li><a href="#" className="hover:text-white">Legal</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Ikuti Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675v-21.35C24 .6 23.4 0 22.675 0z" />
              </svg>
              <a href="#" className="hover:text-white">Facebook</a>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.058-1.277.371-2.45 1.458-3.537 1.087-1.087 2.26-1.4 3.537-1.458 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.058 2.45-.371 3.537-1.458 1.087-1.087 1.4-2.26 1.458-3.537.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.371-2.45-1.458-3.537-1.087-1.087-2.26-1.4-3.537-1.458C15.668.013 15.259 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288z" />
                <path d="M5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.86V9h2.954v11.452z" />
              </svg>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </li>
          </ul>
        </div>
        
        <div className="md:col-span-4 text-center text-gray-500 text-xs mt-8">
          <p>© 2025 Argenta. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white underline text-xs">Privacy Policy</a>
            <a href="#" className="hover:text-white underline text-xs">Terms of Service</a>
            <a href="#" className="hover:text-white underline text-xs">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
