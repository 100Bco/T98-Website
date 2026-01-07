import React from 'react';
import { Card } from '../components/ui/Card';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-extrabold text-brand-navy mb-4 text-center">Contact Us</h1>

          {/* Contact Info */}
          <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-6 mb-4 flex-wrap">
                  <a href="tel:5126142330" className="flex items-center text-xl font-bold text-brand-blue hover:underline">
                      <Phone className="w-5 h-5 mr-2" />
                      (512) 614-2330
                  </a>
                  <a href="mailto:support@t98rehab.com" className="flex items-center text-lg text-brand-blue hover:underline">
                      <Mail className="w-5 h-5 mr-2" />
                      support@t98rehab.com
                  </a>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Austin Location */}
              <Card>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4 text-center">Austin</h2>
                  <div className="flex items-start justify-center text-brand-grey mb-4">
                      <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      <span>1139 Braker Lane #101<br/>Austin, TX 78758</span>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                      <div className="flex items-center justify-center mb-2">
                          <Clock className="w-5 h-5 mr-2 text-brand-navy" />
                          <h3 className="font-bold text-brand-navy">Hours</h3>
                      </div>
                      <ul className="text-sm text-brand-grey space-y-1 text-center">
                          <li><span className="font-semibold">Mon:</span> 8:30am – 1:00pm | 3:00pm - 6:30pm</li>
                          <li><span className="font-semibold">Tue:</span> Closed</li>
                          <li><span className="font-semibold">Wed:</span> 8:30am – 1:00pm | 3:00pm - 6:30pm</li>
                          <li><span className="font-semibold">Thu:</span> Closed</li>
                          <li><span className="font-semibold">Fri:</span> 8:30am – 1:00pm | 3:00pm - 6:30pm</li>
                          <li><span className="font-semibold">Sat-Sun:</span> Closed</li>
                      </ul>
                  </div>

                  <iframe
                    title="Austin Map"
                    className="w-full h-64 rounded-lg border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8447359595384!2d-97.71947!3d30.3873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb5c8b5e5e5f%3A0x0!2s1139%20Braker%20Ln%20%23101%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
              </Card>

              {/* Pflugerville Location */}
              <Card>
                  <h2 className="text-2xl font-bold text-brand-navy mb-4 text-center">Pflugerville</h2>
                  <div className="flex items-start justify-center text-brand-grey mb-4">
                      <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      <span>201 N. Heatherwilde Blvd. #104<br/>Pflugerville, TX 78660</span>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                      <div className="flex items-center justify-center mb-2">
                          <Clock className="w-5 h-5 mr-2 text-brand-navy" />
                          <h3 className="font-bold text-brand-navy">Hours</h3>
                      </div>
                      <ul className="text-sm text-brand-grey space-y-1 text-center">
                          <li><span className="font-semibold">Mon:</span> Closed</li>
                          <li><span className="font-semibold">Tue:</span> 8:30am – 1:00pm | 3:00pm – 6:30pm</li>
                          <li><span className="font-semibold">Wed:</span> Closed</li>
                          <li><span className="font-semibold">Thu:</span> 8:30am – 1:00pm | 3:00pm – 6:30pm</li>
                          <li><span className="font-semibold">Fri:</span> Closed</li>
                          <li><span className="font-semibold">Sat-Sun:</span> Closed</li>
                      </ul>
                  </div>

                  <iframe
                    title="Pflugerville Map"
                    className="w-full h-64 rounded-lg border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.5789!2d-97.6154!3d30.4511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb5c8b5e5e5f%3A0x0!2s201%20N%20Heatherwilde%20Blvd%20%23104%2C%20Pflugerville%2C%20TX%2078660!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    loading="lazy"
                    allowFullScreen
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