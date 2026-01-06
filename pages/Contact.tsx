import React from 'react';
import { Card } from '../components/ui/Card';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-extrabold text-brand-navy mb-12 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="text-center">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Austin (North)</h2>
                  <a href="tel:5129062580" className="block text-xl font-bold text-brand-blue mb-2 hover:underline">(512) 906-2580</a>
                  <div className="flex items-center justify-center text-brand-grey mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      123 Sample Rd, Austin, TX
                  </div>
                  <iframe 
                    title="Austin Map"
                    className="w-full h-48 rounded-lg bg-gray-100" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.0!2d-97.7!3d30.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI0JzAwLjAiTiA5N8KwNDInMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                    loading="lazy"
                  ></iframe>
              </Card>

              <Card className="text-center">
                  <h2 className="text-2xl font-bold text-brand-navy mb-4">Pflugerville</h2>
                  <a href="tel:5122521662" className="block text-xl font-bold text-brand-blue mb-2 hover:underline">(512) 252-1662</a>
                  <div className="flex items-center justify-center text-brand-grey mb-6">
                      <MapPin className="w-5 h-5 mr-2" />
                      456 Sample Ave, Pflugerville, TX
                  </div>
                  <iframe 
                    title="Pflugerville Map"
                    className="w-full h-48 rounded-lg bg-gray-100" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.0!2d-97.6!3d30.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI3JzAwLjAiTiA5N8KwMzYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" 
                    loading="lazy"
                  ></iframe>
              </Card>
          </div>

          <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-brand-navy mb-8">
                  <strong>Text us</strong> your name + preferred time, or <strong>book online</strong>.
              </p>
              <Button>Book Appointment Online</Button>
              <p className="mt-8 text-brand-grey italic">Spanish & Vietnamese available.</p>
          </div>
      </div>
    </div>
  );
};