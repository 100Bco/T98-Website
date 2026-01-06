import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DuotoneIcon } from '../components/ui/DuotoneIcon';
import { Activity, Zap, CheckCircle, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

const conditions = [
  { title: 'Low Back Pain', path: '/conditions/low-back-pain' },
  { title: 'Neck Pain', path: '/conditions/neck-pain' },
  { title: 'Sciatica', path: '/conditions/sciatica' },
  { title: 'Whiplash / Auto Injury', path: '/auto-injury' },
  { title: 'Shoulder Pain', path: '/conditions/shoulder-pain' },
  { title: 'Knee Pain', path: '/conditions/knee-pain' },
  { title: 'Headaches & Migraines', path: '/conditions/headaches-migraines' },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24 lg:pt-32">
        <div className="absolute right-0 top-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-orange/10 to-transparent rounded-full opacity-60 blur-3xl transform translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-brand-navy tracking-tightest leading-tight">
                        Chiropractor & Rehab in Austin and Pflugerville
                    </h1>
                    <p className="text-lg md:text-xl text-brand-grey leading-relaxed max-w-lg">
                        <strong>Pain relief that lasts—without the runaround.</strong>
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link to="/contact">
                            <Button className="w-full sm:w-auto">Book Now</Button>
                        </Link>
                        <Link to="/auto-injury">
                             <Button variant="secondary" className="w-full sm:w-auto">Free Injury Consult</Button>
                        </Link>
                    </div>
                    <p className="text-sm text-brand-grey pt-2 flex items-center">
                        <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                        Accepting New Patients & Auto Injury Cases
                    </p>
                </div>
                <div className="relative">
                    <div className="relative rounded-card overflow-hidden shadow-2xl bg-brand-mist aspect-[5504/3072] group">
                         <img 
                            src="/hero-banner.jpg" 
                            alt="Chiropractor speaking with a patient" 
                            className="w-full h-full object-contain mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-orange/10"></div>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-orange rounded-full opacity-20 blur-2xl"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Curve Divider */}
      <div className="h-16 bg-white rounded-t-[50%] -mt-16 relative z-10 w-full scale-x-150"></div>

      {/* What Hurts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">What hurts? (Start here)</h2>
                <p className="text-brand-grey text-lg">Select your symptom to see how we help.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {conditions.map((item) => (
                    <Link key={item.path} to={item.path}>
                        <Card className="h-full flex flex-col items-center justify-center text-center p-6 hover:border-brand-blue">
                             <h3 className="font-display font-bold text-lg text-brand-navy">{item.title}</h3>
                             <ArrowRight className="mt-4 text-brand-orange w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* The 3R Method */}
      <section className="py-20 bg-brand-mist relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">The T98 “3R Method”</h2>
                <p className="font-bold text-brand-blue text-xl">Recover → Reactivate → Results</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                    <div className="mb-6 flex justify-center">
                        <DuotoneIcon icon={ShieldCheck} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">1. Recover</h3>
                    <p className="text-brand-grey">Calm pain & protect irritated tissues through gentle care.</p>
                </Card>
                <Card className="text-center">
                    <div className="mb-6 flex justify-center">
                         <DuotoneIcon icon={Activity} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">2. Reactivate</h3>
                    <p className="text-brand-grey">Guided rehab to restore strength, motion, and confidence.</p>
                </Card>
                <Card className="text-center">
                    <div className="mb-6 flex justify-center">
                        <DuotoneIcon icon={CheckCircle} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">3. Results</h3>
                    <p className="text-brand-grey">Progress checks, home plan, and long-term flare-up prevention.</p>
                </Card>
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto bg-white p-6 rounded-card border border-brand-blue/20">
                <p className="text-brand-navy font-medium text-lg">
                    "Many patients notice meaningful improvement in <span className="text-brand-orange font-bold">3–5 visits</span> for typical, uncomplicated cases."
                </p>
            </div>
        </div>
      </section>

      {/* Why Choose T98 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <img 
                        src="https://picsum.photos/800/800" 
                        alt="Clinic interior" 
                        className="rounded-card shadow-lg object-cover w-full h-96"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-display font-bold text-brand-navy mb-6">Why patients choose T98</h2>
                    <ul className="space-y-4">
                        {[
                            'Same-day and after-work appointments',
                            'Chiropractors + rehab in one place',
                            'Clear plan, no pressure',
                            'Documentation your attorney and insurance can use (auto injuries)'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle className="text-brand-green w-6 h-6 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-brand-grey text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-10">
                        <Link to="/contact">
                            <Button>Book an Appointment</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Real Outcomes */}
      <section className="py-20 bg-brand-navy text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Real outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    "I could sit through work again after 3 visits.",
                    "My neck rotation came back within two weeks.",
                    "They handled the claim paperwork—huge relief."
                ].map((quote, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-card border border-white/20">
                        <p className="text-lg italic font-medium">“{quote}”</p>
                        <div className="mt-4 flex items-center">
                            <UserCheck className="w-5 h-5 text-brand-orange mr-2" />
                            <span className="text-sm text-gray-300">Verified Patient</span>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>
    </>
  );
};
