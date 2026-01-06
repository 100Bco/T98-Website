import React from 'react';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

export const NewPatients: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4">New Patients</h1>
            <p className="text-xl text-brand-grey">Your first visit, simplified—clear plan, honest timelines, no pressure.</p>
          </div>

          <div className="space-y-8">
              <section>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">First visit (45–60 minutes)</h2>
                  <Card className="bg-white">
                      <ul className="space-y-3">
                          {[
                              'Conversation about your goals',
                              'Exam & movement screen',
                              'First treatment (if appropriate)',
                              'Clear plan & cost transparency'
                          ].map((item, i) => (
                              <li key={i} className="flex items-center text-brand-grey">
                                  <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </Card>
              </section>

              <section>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">What to bring</h2>
                  <p className="text-brand-grey text-lg">ID, insurance (if using), attorney info (if auto injury).</p>
              </section>

              <div className="bg-brand-mist p-6 rounded-card text-center">
                  <p className="font-bold text-brand-navy text-lg">No-pressure consult available.</p>
              </div>
          </div>
      </div>
    </div>
  );
};