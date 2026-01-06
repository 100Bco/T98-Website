import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { ArrowRight } from 'lucide-react';

const conditions = [
    { title: 'Low Back Pain', path: '/conditions/low-back-pain' },
    { title: 'Neck Pain', path: '/conditions/neck-pain' },
    { title: 'Sciatica', path: '/conditions/sciatica' },
    { title: 'Whiplash', path: '/conditions/whiplash' },
    { title: 'Shoulder Pain', path: '/conditions/shoulder-pain' },
    { title: 'Knee Pain', path: '/conditions/knee-pain' },
    { title: 'Headaches & Migraines', path: '/conditions/headaches-migraines' },
];

export const Conditions: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4">Identify Your Pain</h1>
          <p className="text-xl text-brand-grey">Find your symptoms and see how T98 treats the root cause.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {conditions.map((item) => (
                <Link key={item.path} to={item.path}>
                    <Card className="flex items-center justify-between p-8 hover:border-brand-blue group">
                        <span className="font-display font-bold text-xl text-brand-navy">{item.title}</span>
                        <ArrowRight className="text-brand-orange w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Card>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};