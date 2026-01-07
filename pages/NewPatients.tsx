import React from 'react';
import { Card } from '../components/ui/Card';
import { CheckCircle } from 'lucide-react';

export const NewPatients: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand-navy mb-4">New Patients</h1>
            <p className="text-xl text-brand-grey">Your first visit, simplified.</p>
          </div>

          <div className="space-y-12">
              <section>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">For Auto Accident Patients (PI)</h2>
                  <Card className="bg-white">
                      <div className="space-y-4">
                          <div>
                              <p className="font-bold text-brand-navy mb-2">Cost:</p>
                              <p className="text-brand-grey">Typically $0 upfront (We accept LOP/Attorney Liens & PIP).</p>
                          </div>
                          <div>
                              <p className="font-bold text-brand-navy mb-2">What to bring:</p>
                              <p className="text-brand-grey">ID, Auto Insurance info, Claim # (if available), Attorney info.</p>
                          </div>
                          <div>
                              <p className="font-bold text-brand-navy mb-2">Goal:</p>
                              <p className="text-brand-grey">Document injuries and start pain relief immediately.</p>
                          </div>
                      </div>
                  </Card>
              </section>

              <section>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">For General Pain / Wellness</h2>
                  <Card className="bg-white">
                      <div className="space-y-4">
                          <div>
                              <p className="font-bold text-brand-navy mb-2">Cost:</p>
                              <p className="text-brand-grey">Transparent pricing provided before treatment.</p>
                          </div>
                          <div>
                              <p className="font-bold text-brand-navy mb-2">What to bring:</p>
                              <p className="text-brand-grey">ID, Health Insurance card.</p>
                          </div>
                      </div>
                  </Card>
              </section>

              <section>
                  <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">First visit (45–60 minutes)</h2>
                  <Card className="bg-white">
                      <ul className="space-y-3">
                          {[
                              'Conversation about your crash/injury history',
                              'Exam & movement screen',
                              'First treatment (if appropriate)',
                              'No-pressure consult available'
                          ].map((item, i) => (
                              <li key={i} className="flex items-center text-brand-grey">
                                  <CheckCircle className="w-5 h-5 text-brand-green mr-3" />
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </Card>
              </section>

              <div className="bg-brand-mist p-6 rounded-card text-center">
                  <p className="font-bold text-brand-navy text-lg">No-pressure consult available.</p>
              </div>
          </div>
      </div>
    </div>
  );
};