import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
// Đảm bảo đường dẫn import Button đúng với cấu trúc dự án của bạn
import { Button } from '../ui/Button'; 

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State mới để check cuộn
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

  // 1. Logic bắt sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      // Nếu cuộn xuống quá 10px thì set isScrolled = true
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Xác định khi nào Header nên trong suốt
  // Chỉ trong suốt khi: Đang ở Home VÀ Chưa cuộn xuống
  const isTransparent = isHome && !isScrolled;

  // 3. Class cho Header container
  const headerClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isTransparent
      ? 'bg-transparent border-transparent py-4' // Khi ở đầu trang: cao thoáng hơn (py-4)
      : 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-2' // Khi cuộn: gọn lại (py-2), nền trắng mờ
  }`;

  // 4. Class cho màu chữ (Trắng khi trong suốt, Xanh navy khi nền trắng)
  const textColorClass = isTransparent ? 'text-white hover:text-gray-200' : 'text-brand-navy hover:text-brand-orange';
  const activeLinkClass = isTransparent ? 'text-white font-bold border-b-2 border-white' : 'text-brand-blue font-bold border-b-2 border-brand-orange';
  const inactiveLinkClass = isTransparent ? 'text-white/90 hover:text-white' : 'text-brand-grey hover:text-brand-blue';

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 transition-all duration-300">
          
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
             <img
               src="/Logo T98.png"
               alt="T98 Rehab & Chiropractic"
               className="h-12 md:h-14 w-auto"
             />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                    location.pathname === link.path ? activeLinkClass : inactiveLinkClass
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
              className={`flex items-center font-bold text-sm transition-colors ${textColorClass}`}
            >
                <Phone className="w-4 h-4 mr-2" />
                (512) 906-2580
            </a>
            <Link to="/contact">
                {/* Button đổi màu tương phản:
                    - Nền trong suốt -> Button trắng (cho nổi bật)
                    - Nền trắng -> Button chính (cam/gradient)
                */}
                <Button 
                  variant={isTransparent ? 'white' : 'primary'} 
                  className={isTransparent ? 'shadow-lg border-none text-brand-navy hover:bg-gray-100' : ''}
                >
                  Book Now
                </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors ${isTransparent ? 'text-white' : 'text-brand-navy'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen pb-20 overflow-y-auto z-40 top-full left-0">
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
