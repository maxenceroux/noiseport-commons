
import { useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/manifeste', label: 'Manifeste' },
  { to: '/installer', label: 'Installer' },
  { to: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Hide nav on scroll down, show on scroll up
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`w-full border-b border-neutral-800 bg-neutral-950 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} fixed top-0 left-0 z-40`}>
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Noiseport Logo" className="h-12 w-12 object-contain" />
          <Link to="/" className="font-kode text-2xl tracking-tight">NoisePort</Link>
        </div>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 font-syne text-base">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`hover:text-primary transition-colors duration-200 ${pathname === item.to ? 'text-primary font-bold underline' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Burger menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded text-neutral-100 focus:outline-none"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 font-syne text-base bg-neutral-950">
          {navItems.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`block py-2 px-2 rounded hover:bg-neutral-900 hover:text-primary transition-colors duration-200 ${pathname === item.to ? 'text-primary font-bold underline' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
