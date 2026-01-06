import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Conditions', path: '/conditions' },
    { name: 'Auto Injury', path: '/auto-injury' },
    { name: 'About', path: '/about' },
    { name: 'New Patients', path: '/new-patients' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none" onClick={closeMenu}>
             <span className="font-display font-extrabold text-3xl tracking-tight text-brand-blue">T98</span>
             <span className="font-display font-bold text-sm text-brand-orange">Rehab & Chiropractic</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  location.pathname === link.path ? 'text-brand-blue font-bold' : 'text-brand-grey'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:5129062580" className="flex items-center text-brand-navy font-bold text-sm">
                <Phone className="w-4 h-4 mr-2" />
                (512) 906-2580
            </a>
            <Link to="/contact">
                <Button>Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen pb-20 overflow-y-auto">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-gray-50 ${
                   location.pathname === link.path ? 'text-brand-blue' : 'text-brand-grey'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
                 <a href="tel:5129062580" className="flex items-center justify-center text-brand-navy font-bold py-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Austin: (512) 906-2580
                </a>
                 <a href="tel:5122521662" className="flex items-center justify-center text-brand-navy font-bold py-3 bg-gray-50 rounded-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Pflugerville: (512) 252-1662
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};