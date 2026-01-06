import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 md:pb-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <img
               src="/Logo T98.png"
               alt="T98 Rehab & Chiropractic"
               className="h-14 w-auto mb-4"
             />
             <p className="text-gray-300 text-sm leading-relaxed">
               Specializing in Auto Accident Injury & Pain Relief Rehabilitation.
             </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Locations</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <strong className="text-white block">Austin (North)</strong>
                123 Sample Rd<br/>
                Austin, TX 78xxx
              </li>
              <li>
                <strong className="text-white block">Pflugerville</strong>
                456 Sample Ave<br/>
                Pflugerville, TX 78xxx
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-display font-bold text-lg mb-4">Hours</h3>
             <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex justify-between max-w-[150px]"><span>Mon-Fri</span> <span>8am - 6pm</span></li>
                <li className="flex justify-between max-w-[150px]"><span>Sat</span> <span>9am - 1pm</span></li>
                <li className="flex justify-between max-w-[150px]"><span>Sun</span> <span>Closed</span></li>
             </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/auto-injury" className="hover:text-brand-orange">Auto Injury</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange">Services</Link></li>
              <li><Link to="/new-patients" className="hover:text-brand-orange">New Patients</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} T98 Rehab & Chiropractic. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Information provided is educational and not a substitute for personalized medical advice.</p>
        </div>
      </div>
    </footer>
  );
};
