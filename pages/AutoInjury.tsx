import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CheckCircle, Clock, FileText, Shield, AlertCircle } from 'lucide-react';

export const AutoInjury: React.FC = () => {
  return (
    <div className="bg-brand-mist">
      {/* Dark Hero Section */}
      <section className="bg-brand-navy text-white pt-20 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wide mb-6">
                    Auto Injury Care
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
                    Auto Injury Chiropractic — Same-Day Appointments
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Neck or back pain after a crash? We’ll assess you, start relief, and handle the paperwork.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                     <a href="tel:5129062580">
                         <Button variant="primary" className="w-full sm:w-auto">Call Now</Button>
                     </a>
                     <Link to="/contact">
                         <Button variant="white" className="w-full sm:w-auto">Free Injury Consult</Button>
                     </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300">
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 text-brand-green mr-2" /> Zero Upfront Cost (PIP/LOP)</span>
                    <span className="flex items-center"><CheckCircle className="w-4 h-4 text-brand-green mr-2" /> Attorney Friendly</span>
                </div>
              </div>
              <div className="relative">
                 <img 
                    src="https://picsum.photos/800/600?grayscale" 
                    alt="Professional Clinical Exam" 
                    className="rounded-card shadow-2xl opacity-90 border-4 border-white/10"
                 />
                 <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-card shadow-glow-orange hidden md:block">
                    <p className="font-bold text-lg">Don't wait.</p>
                    <p className="text-sm">Symptoms can appear days later.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-12 text-center">What to do after a crash</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "1. Get checked", desc: "Symptoms can appear hours to days later.", icon: Clock },
                    { title: "2. Document everything", desc: "Photos, police report, pain timeline.", icon: FileText },
                    { title: "3. Start care early", desc: "Gentle treatment protects your recovery.", icon: Shield },
                    { title: "4. Claims help", desc: "We provide notes, ROM measures, & progress records.", icon: CheckCircle },
                ].map((step, idx) => (
                    <Card key={idx} className="border-t-4 border-t-brand-orange relative">
                        <div className="absolute -top-6 left-6 bg-brand-navy text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-display shadow-lg">
                            {idx + 1}
                        </div>
                        <div className="pt-6">
                            <h3 className="font-bold text-brand-navy text-xl mb-2">{step.title}</h3>
                            <p className="text-brand-grey text-sm">{step.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display font-bold text-brand-navy mb-8">Typical symptom timeline</h2>
              <div className="space-y-6">
                  <div className="flex">
                      <div className="w-24 flex-shrink-0 font-bold text-brand-orange text-right pr-4 pt-1">0–72 hours</div>
                      <div className="border-l-2 border-brand-mist pl-6 pb-2">
                          <h4 className="font-bold text-brand-navy">Stiffness, headaches, soreness</h4>
                      </div>
                  </div>
                  <div className="flex">
                      <div className="w-24 flex-shrink-0 font-bold text-brand-orange text-right pr-4 pt-1">3–7 days</div>
                      <div className="border-l-2 border-brand-mist pl-6 pb-2">
                          <h4 className="font-bold text-brand-navy">Pain with turning, sleep issues</h4>
                      </div>
                  </div>
                  <div className="flex">
                      <div className="w-24 flex-shrink-0 font-bold text-brand-orange text-right pr-4 pt-1">2–3 weeks</div>
                      <div className="border-l-2 border-brand-mist pl-6 pb-2">
                          <h4 className="font-bold text-brand-navy">Lingering tightness without rehab</h4>
                      </div>
                  </div>
              </div>
              <div className="mt-8 p-4 bg-brand-mist rounded-lg border border-brand-blue/20 flex items-start">
                   <AlertCircle className="w-5 h-5 text-brand-blue mr-3 mt-0.5 flex-shrink-0" />
                   <p className="text-brand-navy font-medium italic">Earlier treatment often means faster recovery.</p>
              </div>
          </div>
      </section>

      {/* Why T98 */}
      <section className="py-20 bg-brand-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-brand-navy mb-8">Why T98 for auto injuries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                 {['Same-day openings', 'Chiropractors & rehab', 'Attorney-friendly docs', 'PIP / LOP support'].map((item, i) => (
                     <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-bold text-brand-navy flex items-center justify-center">
                         <CheckCircle className="w-5 h-5 text-brand-green mr-2" />
                         {item}
                     </div>
                 ))}
            </div>
            
            {/* Simple Form Placeholder */}
            <div className="max-w-xl mx-auto bg-white p-8 rounded-card shadow-lg">
                <h3 className="font-display font-bold text-brand-navy text-xl mb-4">Request a Free Injury Consult</h3>
                <div className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue" />
                    <input type="text" placeholder="Best time to call" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue" />
                    <Button className="w-full">Submit Request</Button>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-8 text-center">FAQs</h2>
              <div className="space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-brand-navy mb-2">Do I need a referral?</h4>
                      <p className="text-brand-grey">Usually no.</p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-brand-navy mb-2">Do you work with attorneys?</h4>
                      <p className="text-brand-grey">Yes—daily.</p>
                  </div>
                  <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-bold text-brand-navy mb-2">Will insurance cover it?</h4>
                      <p className="text-brand-grey">We’ll verify benefits and explain options.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};