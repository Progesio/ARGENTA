import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-gradient-to-b from-red-900 via-red-900/90 to-transparent ${className}`}>
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold tracking-widest">ARGENTA</div>
        
        {/* Hamburger button (mobile only) */}
        <button
          id="hamburger"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
        
        <ul 
          className={`
            ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible hidden'}
            md:flex md:flex-row md:space-x-8 md:static md:bg-transparent md:w-auto md:h-auto md:opacity-100 md:visible
            fixed top-16 left-0 w-full bg-red-900/95 h-screen flex-col items-center justify-center space-y-8 md:space-y-0 
            transition-all duration-300 z-40
          `}
        >
          <li className="w-full md:w-auto text-center">
            <a href="/" className="block py-2 md:py-0 hover:text-red-500 font-medium" onClick={closeMenu}>
              Perusahaan
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a href="#layanan" className="block py-2 md:py-0 hover:text-red-500 font-medium" onClick={closeMenu}>
              Layanan
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a href="/karir" className="block py-2 md:py-0 hover:text-red-500 font-medium" onClick={closeMenu}>
              Karir
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a href="/berita" className="block py-2 md:py-0 hover:text-red-500 font-medium" onClick={closeMenu}>
              Artikel
            </a>
          </li>
          <li className="w-full md:w-auto text-center">
            <a href="#kontak" className="block py-2 md:py-0 hover:text-red-500 font-medium" onClick={closeMenu}>
              Hubungi Kami
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
