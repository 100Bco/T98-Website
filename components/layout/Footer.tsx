import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 md:pb-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="mb-4">
                <img
                  src="/Logo T98.png"
                  alt="T98 Rehab & Chiropractic"
                  className="h-12 w-auto"
                />
             </div>
             <p className="text-gray-300 text-sm leading-relaxed">
               Specializing in Auto Accident Injury & Pain Relief Rehabilitation.
             </p>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Locations</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <strong className="text-white block">Austin</strong>
                1139 Braker Lane #101<br/>
                Austin, TX 78758
              </li>
              <li>
                <strong className="text-white block">Pflugerville</strong>
                201 N. Heatherwilde Blvd. #104<br/>
                Pflugerville, TX 78660
              </li>
            </ul>
          </div>

          <div>
             <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
             <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="tel:5126142330" className="hover:text-brand-orange">
                    <strong className="text-white">Phone:</strong><br/>
                    (512) 614-2330
                  </a>
                </li>
                <li>
                  <a href="mailto:support@t98rehab.com" className="hover:text-brand-orange">
                    <strong className="text-white">Email:</strong><br/>
                    support@t98rehab.com
                  </a>
                </li>
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
