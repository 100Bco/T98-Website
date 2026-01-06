import React from 'react';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4">About T98</h1>
            <p className="text-xl text-brand-grey">Specializing in Auto Accident Injury & Pain Relief Rehabilitation.</p>
         </div>

         <div className="mb-20">
             <h2 className="text-2xl font-display font-bold text-brand-navy mb-6">Our Approach</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {['3R Method: Recover → Reactivate → Results', 'Evidence-based, patient-first', 'Plans that fit real life'].map((item, i) => (
                     <Card key={i} className="bg-brand-mist border-0">
                         <p className="font-bold text-brand-navy text-lg">{item}</p>
                     </Card>
                 ))}
             </div>
         </div>

         <div>
             <h2 className="text-3xl font-display font-bold text-brand-navy mb-10 text-center">Meet the team</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-4">
                     <div className="h-80 bg-gray-200 rounded-card overflow-hidden">
                         <img src="Dr.Thomas.jpg" alt="Dr. Adam Anh Tran" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="text-2xl font-bold text-brand-navy">Dr. Adam Anh Tran, DC</h3>
                     <p className="text-brand-orange font-bold text-sm uppercase tracking-wide">Chiropractor, Austin (North)</p>
                     <ul className="text-brand-grey space-y-1">
                         <li>Focus: auto‑injury documentation, neck & low‑back pain, active rehab</li>
                         <li>Languages: English, Vietnamese</li>
                     </ul>
                 </div>
                 <div className="space-y-4">
                     <div className="h-80 bg-gray-200 rounded-card overflow-hidden">
                         <img src="https://picsum.photos/600/600?random=2" alt="Dr. Thien To" className="w-full h-full object-cover" />
                     </div>
                     <h3 className="text-2xl font-bold text-brand-navy">Dr. Thien To, DC</h3>
                     <p className="text-brand-orange font-bold text-sm uppercase tracking-wide">Chiropractor, Pflugerville</p>
                     <ul className="text-brand-grey space-y-1">
                         <li>Focus: sports & work‑related injuries, shoulder/knee rehab, family chiropractic</li>
                         <li>Languages: English, Vietnamese</li>
                     </ul>
                 </div>
             </div>
             <div className="text-center mt-16">
                <Link to="/contact">
                    <Button>Book Now</Button>
                </Link>
             </div>
         </div>
      </div>
    </div>
  );
};
