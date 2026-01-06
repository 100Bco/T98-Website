import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const serviceData: Record<string, any> = {
  'chiropractic-care': {
    title: 'Chiropractic Care',
    desc: 'Gentle, evidence-based adjustments to improve motion and reduce pain.',
    content: {
       expect: ['Focused exam & movement screen', 'Targeted adjustments (no “crack-everything” approach)', 'Mobility drills you can do at home'],
       helps: 'Low back and neck pain, headaches, sciatica, shoulder and mid-back tightness.',
       note: 'Many uncomplicated cases improve meaningfully within 3–5 visits, paired with simple rehab.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'rehab-therapy': {
    title: 'Rehab Therapy',
    desc: 'We retrain the muscles and joints so your results last.',
    content: {
        expect: ['Breathing & core control', 'Mobility + stability progressions', 'Return-to-work or sport planning'],
        goal: 'Get you confident with a short, realistic home plan.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'dry-needling': {
    title: 'Dry Needling',
    desc: 'Targeted relief for stubborn knots and tension.',
    content: {
        list: ['Performed by trained clinicians', 'Often paired with rehab for longer-term results', 'Most patients feel temporary soreness for 24–48h'],
        cta: 'Ask if it’s right for you.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'cupping-therapy': {
      title: 'Cupping Therapy',
      desc: 'Decompress tight tissues and improve circulation.',
      content: {
          list: ['Static or gliding techniques', 'Helpful for neck, back, and shoulder tightness', 'Usually combined with mobility work']
      },
      img: 'https://picsum.photos/800/400?grayscale&blur=1'
  }
};

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = id ? serviceData[id] : null;

  if (!data) return <Navigate to="/services" />;

  return (
    <div className="pt-24 pb-20">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <Link to="/services" className="text-brand-blue font-bold text-sm mb-4 inline-block">← Back to Services</Link>
           
           <h1 className="text-4xl font-display font-extrabold text-brand-navy mb-6">{data.title}</h1>
           <p className="text-xl text-brand-grey mb-8">{data.desc}</p>
           
           <div className="rounded-card overflow-hidden shadow-lg mb-12 h-64 md:h-80 w-full relative">
               <img src={data.img} alt={data.title} className="w-full h-full object-cover" />
           </div>

           <div className="prose prose-lg max-w-none text-brand-grey">
               {data.content.expect && (
                   <>
                       <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">What to expect</h2>
                       <ul className="space-y-3 mb-8">
                           {data.content.expect.map((item: string, i: number) => (
                               <li key={i} className="flex items-start">
                                   <CheckCircle className="w-5 h-5 text-brand-green mr-3 mt-1" />
                                   <span>{item}</span>
                               </li>
                           ))}
                       </ul>
                   </>
               )}

               {data.content.list && (
                    <ul className="space-y-3 mb-8">
                        {data.content.list.map((item: string, i: number) => (
                            <li key={i} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-brand-green mr-3 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
               )}

               {data.content.helps && (
                   <div className="mb-8">
                       <h2 className="text-2xl font-display font-bold text-brand-navy mb-4">Who it helps</h2>
                       <p>{data.content.helps}</p>
                   </div>
               )}

               {data.content.note && (
                   <div className="bg-brand-mist border-l-4 border-brand-blue p-6 mb-8 rounded-r-lg">
                       <p className="font-medium text-brand-navy italic">{data.content.note}</p>
                   </div>
               )}
               
               {data.content.goal && (
                   <p className="font-bold text-brand-navy mb-8">Goal: {data.content.goal}</p>
               )}

               <div className="mt-12">
                   <Link to="/contact">
                       <Button>Book Now</Button>
                   </Link>
               </div>
           </div>
       </div>
    </div>
  );
};