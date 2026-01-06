import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button'; // Đảm bảo đường dẫn này đúng với cấu trúc folder của bạn

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Logic để Header trong suốt khi ở Home, và nền trắng khi ở trang khác
  const headerClasses = isHome
    ? 'fixed top-0 w-full z-50 bg-transparent border-transparent transition-all duration-300'
    : 'fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300 shadow-sm';

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo T98 (Dạng chữ - Tự động đổi màu theo nền) */}
          <Link to="/" className="flex flex-col leading-none group" onClick={closeMenu}>
             <span className={`font-display font-extrabold text-3xl tracking-tight transition-colors ${isHome ? 'text-white group-hover:text-gray-200' : 'text-brand-blue'}`}>
               T98
             </span>
             <span className={`font-display font-bold text-sm transition-colors ${isHome ? 'text-white/80 group-hover:text-white' : 'text-brand-orange'}`}>
               Rehab & Chiropractic
             </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isHome
                    ? location.pathname === link.path
                      ? 'text-white font-bold border-b-2 border-white'
                      : 'text-white/80 hover:text-white'
                    : location.pathname === link.path
                      ? 'text-brand-blue font-bold border-b-2 border-brand-orange'
                      : 'text-brand-grey hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:5129062580"
              className={`flex items-center font-bold text-sm transition-colors ${isHome ? 'text-white hover:text-gray-200' : 'text-brand-navy hover:text-brand-orange'}`}
            >
                <Phone className="w-4 h-4 mr-2" />
                (512) 906-2580
            </a>
            <Link to="/contact">
                {/* Button tự đổi style theo trang */}
                <Button 
                  variant={isHome ? 'primary' : 'primary'} 
                  className={isHome ? 'bg-white text-brand-navy hover:bg-gray-100 border-none shadow-lg' : ''}
                >
                  Book Now
                </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ${isHome ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen pb-20 overflow-y-auto z-40">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-3 border-b border-gray-50 ${
                   location.pathname === link.path ? 'text-brand-blue font-bold pl-2 border-l-4 border-brand-orange' : 'text-brand-grey'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex flex-col space-y-4">
                 <a href="tel:5129062580" className="flex items-center justify-center text-brand-navy font-bold py-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                    <Phone className="w-5 h-5 mr-2 text-brand-orange" />
                    Call Austin: (512) 906-2580
                </a>
                 <a href="tel:5122521662" className="flex items-center justify-center text-brand-navy font-bold py-4 bg-gray-50 rounded-xl hover:bg-gray-100">
                    <Phone className="w-5 h-5 mr-2 text-brand-orange" />
                    Call Pflugerville: (512) 252-1662
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
