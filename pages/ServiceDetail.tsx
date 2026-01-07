import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const serviceData: Record<string, any> = {
  'chiropractic-care': {
    title: 'Chiropractic Care',
    desc: 'Gentle, evidence-based adjustments to improve motion and reduce pain.',
    subtitle: 'Perfect for Auto Injuries',
    subtitleDesc: 'After a crash, your body is guarded and stiff. We use gentle mobilization (not just "cracking") to help you move again without fear.',
    content: {
       expect: ['Focused exam & movement screen', 'Targeted adjustments to restore Range of Motion', 'Pain-relief modalities'],
       helps: 'Low back and neck pain, headaches, sciatica, shoulder and mid-back tightness.',
       note: 'Need Legal Support? We document every adjustment and improvement to support your personal injury claim. We handle the paperwork for you.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'rehab-therapy': {
    title: 'Rehab Therapy',
    desc: 'We retrain muscles and joints so your results last.',
    subtitle: 'Why Rehab Matters for Claims',
    subtitleDesc: 'Insurance adjusters look for "functional improvement." Our rehab notes prove that you are actively working to get better, which strengthens your case.',
    content: {
        expect: ['Mobility + stability progressions', 'Return-to-work or driving planning', 'Realistic home plan'],
        note: 'Claim Tip: Active rehab demonstrates to insurance companies that you are committed to recovery, which can help value your claim higher.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'dry-needling': {
    title: 'Dry Needling (Vi Châm)',
    desc: 'Targeted relief for stubborn knots and deep muscle tension.',
    subtitle: 'How it helps Auto Injuries',
    subtitleDesc: 'After a crash, muscles often lock up in deep spasms (trigger points) to protect the spine. Dry needling releases these knots instantly to restore motion.',
    content: {
        expect: ['Precise: We use thin, sterile filaments to target the specific muscle belly', 'Effective: Often provides immediate relief for "stiff neck" and low back tightness', 'Sensation: You may feel a "twitch" response as the muscle releases tension'],
        note: 'Commonly combined with electrical stimulation for maximum pain relief.'
    },
    img: 'https://picsum.photos/800/400?grayscale&blur=1'
  },
  'cupping-therapy': {
      title: 'Cupping Therapy',
      desc: 'Decompress tight tissues and flush out inflammation.',
      subtitle: 'Why Cupping?',
      subtitleDesc: 'Unlike massage which "presses down," cupping "lifts up" the tissue. This decompression is excellent for increasing blood flow, breaking up scar tissue, and relieving the "heavy" sensation in the back and shoulders.',
      content: {
          list: ['Static: Cups stay in place for deep release', 'Gliding: Cups are moved along the muscles for myofascial release'],
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
               {data.subtitle && (
                   <div className="mb-8">
                       <h2 className="text-2xl font-display font-bold text-brand-navy mb-3">{data.subtitle}</h2>
                       <p className="text-lg">{data.subtitleDesc}</p>
                   </div>
               )}

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