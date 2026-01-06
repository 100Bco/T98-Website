import React from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-lg flex h-[safe-area-inset-bottom+60px] pb-[safe-area-inset-bottom]">
      <a 
        href="tel:5129062580" 
        className="flex flex-col items-center justify-center w-[30%] bg-white text-brand-blue active:bg-gray-50 border-r border-gray-200"
      >
        <Phone className="w-5 h-5 mb-1" />
        <span className="text-xs font-bold">Call</span>
      </a>
      <Link 
        to="/contact" 
        className="flex flex-col items-center justify-center w-[70%] bg-brand-orange text-white active:bg-orange-600"
      >
        <CalendarCheck className="w-5 h-5 mb-1" />
        <span className="text-xs font-bold uppercase tracking-wide">Book Appointment</span>
      </Link>
    </div>
  );
};