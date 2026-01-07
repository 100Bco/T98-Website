import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button'; 
import { Card } from '../components/ui/Card';
import { DuotoneIcon } from '../components/ui/DuotoneIcon';
import { GoogleReviews } from '../components/ui/GoogleReviews';
import { Activity, CheckCircle, ArrowRight, ShieldCheck, AlertTriangle, DollarSign, FileText, Users } from 'lucide-react';

const conditions = [
  { title: 'Auto Injury / Whiplash', path: '/auto-injury', urgent: true, image: '/Whiplash.jpg' },
  { title: 'Neck & Back Pain', path: '/conditions/neck-pain', image: '/Neck & Back Pain.jpg' },
  { title: 'Sciatica / Leg Pain', path: '/conditions/sciatica', image: '/Sciatica.jpg' },
  { title: 'Headaches from Crash', path: '/conditions/headaches-migraines', image: '/Headache.jpg' },
  { title: 'Shoulder Pain', path: '/conditions/shoulder-pain', image: '/Shoulder.jpg' },
  { title: 'Low Back Pain', path: '/conditions/low-back-pain', image: '/Low Back.jpeg' },
  { title: 'Knee Pain', path: '/conditions/knee-pain', image: '/Knee.jpeg' },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/t98-hero.jpg"
            alt="Professional care at T98 Rehab & Chiropractic"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay - covers exactly left 50% of screen */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 from-0% via-brand-navy/50 via-40% to-transparent to-50%"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-left text-white space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tightest leading-tight">
                Recover Faster from Auto Injuries
              </h1>
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-gray-100">
                Same-Day Chiropractic & Rehab Care in Austin & Pflugerville
              </p>
              <p className="text-base leading-relaxed text-gray-200">
                Injury after a car accident isn't just pain—it's a race against time. At T98, you get quick care, insurance support, and effective recovery plans immediately.
              </p>
              <p className="text-brand-orange font-bold text-lg">
                Most auto injury exams cost $0 out-of-pocket.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link to="/auto-injury">
                  <Button className="w-full sm:w-auto px-6 py-3">Get Your Free Injury Consultation</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto px-6 py-3 bg-white text-brand-navy hover:bg-gray-100 border-0">Book Same-Day Appointment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* 72-Hour Rule Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-display font-bold text-brand-navy mb-3">⚠️ The 72-Hour Rule</h2>
                <p className="text-brand-grey text-lg mb-4">
                  <strong>Don't Wait.</strong> Insurance companies often deny or reduce claims if you wait too long to see a doctor. Symptoms like whiplash can take 48-72 hours to appear.
                </p>
                <p className="text-brand-navy font-semibold text-lg">
                  Protect your health and your settlement—get checked today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose T98 Section */}
      <section className="py-20 bg-brand-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Why Choose T98?</h2>
            <p className="text-brand-orange text-xl font-bold">#1 Auto Injury Chiropractor – Trusted by Attorneys & Patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="mb-4 flex justify-center">
                <DuotoneIcon icon={DollarSign} size={40} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">$0 Out-of-Pocket Options</h3>
              <p className="text-brand-grey">We accept LOPs (Letters of Protection), PIP, and MedPay.</p>
            </Card>

            <Card className="text-center">
              <div className="mb-4 flex justify-center">
                <DuotoneIcon icon={FileText} size={40} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Claims Assistance</h3>
              <p className="text-brand-grey">We handle the paperwork so you don't have to.</p>
            </Card>

            <Card className="text-center">
              <div className="mb-4 flex justify-center">
                <DuotoneIcon icon={Users} size={40} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Bilingual Team</h3>
              <p className="text-brand-grey">We speak Vietnamese, Spanish, and English.</p>
            </Card>

            <Card className="text-center">
              <div className="mb-4 flex justify-center">
                <DuotoneIcon icon={Activity} size={40} />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-navy mb-2">Chiropractic + Rehab</h3>
              <p className="text-brand-grey">Comprehensive care to restore function, not just cover up pain.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Hurts Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">WHAT HURTS?</h2>
                <p className="text-brand-grey text-lg">Select your symptom to see how we help.</p>
            </div>

            {/* First row: 4 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {conditions.slice(0, 4).map((item) => (
                    <Link key={item.path} to={item.path}>
                        <Card className={`h-full flex flex-col overflow-hidden hover:border-brand-blue relative group ${item.urgent ? 'border-brand-orange border-2' : ''}`}>
                             {item.urgent && (
                               <span className="absolute top-2 right-2 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded z-10">URGENT</span>
                             )}
                             <div className="w-full h-36 overflow-hidden">
                               <img
                                 src={item.image}
                                 alt={item.title}
                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                               />
                             </div>
                             <div className="p-4 text-center flex flex-col items-center justify-center flex-grow">
                               <h3 className="font-display font-bold text-base text-brand-navy mb-2">{item.title}</h3>
                               <ArrowRight className="text-brand-orange w-4 h-4" />
                             </div>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Second row: 3 items centered */}
            <div className="flex flex-wrap justify-center gap-4">
                {conditions.slice(4).map((item) => (
                    <Link key={item.path} to={item.path} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.67rem)] lg:w-[calc(25%-0.75rem)]">
                        <Card className="h-full flex flex-col overflow-hidden hover:border-brand-blue relative group">
                             <div className="w-full h-36 overflow-hidden">
                               <img
                                 src={item.image}
                                 alt={item.title}
                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                               />
                             </div>
                             <div className="p-4 text-center flex flex-col items-center justify-center flex-grow">
                               <h3 className="font-display font-bold text-base text-brand-navy mb-2">{item.title}</h3>
                               <ArrowRight className="text-brand-orange w-4 h-4" />
                             </div>
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
                <Card className="text-center p-6">
                    <div className="mb-6 flex justify-center">
                        <DuotoneIcon icon={ShieldCheck} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">1. Recover</h3>
                    <p className="text-brand-grey">Calm pain & protect irritated tissues through gentle care.</p>
                </Card>
                <Card className="text-center p-6">
                    <div className="mb-6 flex justify-center">
                         <DuotoneIcon icon={Activity} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">2. Reactivate</h3>
                    <p className="text-brand-grey">Guided rehab to restore strength, motion, and confidence.</p>
                </Card>
                <Card className="text-center p-6">
                    <div className="mb-6 flex justify-center">
                        <DuotoneIcon icon={CheckCircle} size={48} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-brand-navy mb-3">3. Results</h3>
                    <p className="text-brand-grey">Progress checks, home plan, and long-term flare-up prevention.</p>
                </Card>
            </div>

            <div className="mt-12 text-center max-w-2xl mx-auto bg-white p-6 rounded-card border border-brand-blue/20 shadow-sm">
                <p className="text-brand-navy font-medium text-lg">
                    "Many patients notice meaningful improvement in <span className="text-brand-orange font-bold">3–5 visits</span> for typical, uncomplicated cases."
                </p>
            </div>
        </div>
      </section>


      {/* Google Reviews Section */}
      <section className="py-20 bg-brand-navy text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-center mb-4">What Our Patients Say</h2>
            <p className="text-center text-gray-300 mb-12">Real recoveries from real patients.</p>

            <GoogleReviews />
         </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">Our Locations</h2>
            <p className="text-brand-grey text-lg">Austin • Pflugerville</p>
            <p className="text-brand-orange font-bold">Call: (512) 614-2330</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">Austin</h3>
              <p className="text-brand-grey text-sm mb-2">1139 Braker Lane #101<br/>Austin, TX 78758</p>
              <p className="text-brand-grey text-xs mb-4">
                Mon, Wed, Fri: 8:30am – 1:00pm | 3:00pm - 6:30pm<br/>
                Tue, Thu, Sat, Sun: Closed
              </p>
              <iframe
                title="Austin Map"
                className="w-full h-48 rounded-lg border-0 mb-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.8447359595384!2d-97.71947!3d30.3873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb5c8b5e5e5f%3A0x0!2s1139%20Braker%20Ln%20%23101%2C%20Austin%2C%20TX%2078758!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
              ></iframe>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">Book Appointment</Button>
              </Link>
            </Card>

            <Card className="text-center">
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">Pflugerville</h3>
              <p className="text-brand-grey text-sm mb-2">201 N. Heatherwilde Blvd. #104<br/>Pflugerville, TX 78660</p>
              <p className="text-brand-grey text-xs mb-4">
                Tue, Thu: 8:30am – 1:00pm | 3:00pm – 6:30pm<br/>
                Mon, Wed, Fri, Sat, Sun: Closed
              </p>
              <iframe
                title="Pflugerville Map"
                className="w-full h-48 rounded-lg border-0 mb-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.5789!2d-97.6154!3d30.4511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cb5c8b5e5e5f%3A0x0!2s201%20N%20Heatherwilde%20Blvd%20%23104%2C%20Pflugerville%2C%20TX%2078660!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                loading="lazy"
                allowFullScreen
              ></iframe>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">Book Appointment</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
