import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { DuotoneIcon } from '../components/ui/DuotoneIcon';
import { Activity, Disc, Heart, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Chiropractic Care',
      desc: 'Gentle, evidence-based adjustments to improve motion and reduce pain.',
      icon: Activity,
      path: '/services/chiropractic-care',
      list: ['Focused exam & movement screen', 'Targeted adjustments', 'Mobility drills']
    },
    {
      title: 'Rehab Therapy',
      desc: '1:1 active rehab to restore strength and control so results last.',
      icon: Disc,
      path: '/services/rehab-therapy',
      list: ['Breathing & core control', 'Mobility + stability', 'Return-to-sport planning']
    },
    {
      title: 'Dry Needling',
      desc: 'Targeted needling for stubborn trigger points and muscle tension.',
      icon: Zap,
      path: '/services/dry-needling',
      list: ['Performed by trained clinicians', 'Often paired with rehab', 'Relieves stubborn knots']
    },
    {
      title: 'Cupping Therapy',
      desc: 'Decompress tissues, improve circulation, and reduce tightness.',
      icon: Heart,
      path: '/services/cupping-therapy',
      list: ['Static or gliding techniques', 'Improves circulation', 'Reduces tightness']
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4">Services</h1>
           <p className="text-xl text-brand-grey">Treatments that make relief stick.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {services.map((service) => (
             <Link key={service.path} to={service.path}>
               <Card className="h-full flex flex-col group">
                  <div className="mb-6">
                    <DuotoneIcon icon={service.icon} size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-brand-grey mb-6 flex-grow">{service.desc}</p>
                  <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
                     {service.list.map((item, i) => (
                        <li key={i} className="text-sm text-brand-grey flex items-center">
                           <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                           {item}
                        </li>
                     ))}
                  </ul>
                  <div className="text-brand-blue font-bold text-sm flex items-center mt-auto">
                     Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
               </Card>
             </Link>
           ))}
        </div>
      </div>
    </div>
  );
};