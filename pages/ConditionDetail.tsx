import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const conditionData: Record<string, any> = {
  'low-back-pain': {
    title: 'Low Back Pain Treatment',
    subtitle: 'Calm pain, restore motion, prevent flare-ups.',
    sections: [
        { title: 'Common patterns', content: 'Sitting stiffness, bending pain, morning tightness.' },
        { title: 'The T98 3R plan', list: [
            'Recover: gentle adjustments, pain-reducing positions',
            'Reactivate: core & hip progressions (5–10 min/day)',
            'Results: lift, sit, and sleep without flare-ups'
        ]}
    ],
    note: 'Many uncomplicated cases improve meaningfully within 3–5 visits.'
  },
  'neck-pain': {
    title: 'Neck Pain Treatment',
    subtitle: 'Gentle care for stiffness, poor rotation, and screen-time strain.',
    sections: [],
    plan: 'targeted adjustments → mobility drills → posture habits that actually stick.'
  },
  'sciatica': {
      title: 'Sciatica Treatment',
      subtitle: 'Shooting leg pain or numbness down the leg?',
      sections: [],
      plan: 'calm irritated nerve tissues → restore hip & spine mechanics → progressive walking & lifting.'
  },
  'whiplash': {
      title: 'Whiplash Treatment',
      subtitle: 'Neck pain or headaches after a crash?',
      sections: [],
      list: ['Same-day assessment', 'Gentle care and home drills', 'Claim-friendly documentation'],
      cta: 'Free Injury Consult'
  },
  'shoulder-pain': {
      title: 'Shoulder Pain Treatment',
      subtitle: 'Rotator cuff irritation, impingement, or desk tightness.',
      sections: [],
      plan: 'shoulder blade control → rotator cuff loading → return to reach & lift.'
  },
  'knee-pain': {
      title: 'Knee Pain Treatment',
      subtitle: 'Patellar pain, runner’s knee, or post-injury stiffness.',
      sections: [],
      plan: 'reduce irritation → quad/hip strength → gait & squat progressions.'
  },
  'headaches-migraines': {
      title: 'Headaches & Migraines',
      subtitle: 'For many, neck mechanics drive headaches.',
      sections: [],
      plan: 'gentle adjustments → neck mobility & breathing → trigger management.'
  }
};

export const ConditionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = id ? conditionData[id] : null;
  
    if (!data) return <Navigate to="/conditions" />;
  
    return (
      <div className="pt-24 pb-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <Link to="/conditions" className="text-brand-blue font-bold text-sm mb-4 inline-block">← Back to Conditions</Link>
             
             <h1 className="text-4xl font-display font-extrabold text-brand-navy mb-4">{data.title}</h1>
             <p className="text-2xl text-brand-grey mb-10 leading-relaxed">{data.subtitle}</p>
             
             {data.sections.map((section: any, i: number) => (
                 <div key={i} className="mb-8">
                     <h2 className="text-xl font-display font-bold text-brand-navy mb-3">{section.title}</h2>
                     {section.content && <p className="text-brand-grey">{section.content}</p>}
                     {section.list && (
                         <ul className="list-disc pl-5 space-y-2 text-brand-grey">
                             {section.list.map((li: string, j: number) => <li key={j}>{li}</li>)}
                         </ul>
                     )}
                 </div>
             ))}

             {data.plan && (
                 <div className="bg-brand-mist p-6 rounded-card border border-brand-blue/10 mb-8">
                     <h2 className="font-bold text-brand-navy mb-2">The Plan:</h2>
                     <p className="text-lg font-medium text-brand-blue">{data.plan}</p>
                 </div>
             )}

             {data.list && (
                 <ul className="list-disc pl-5 space-y-2 text-brand-grey mb-8">
                     {data.list.map((li: string, j: number) => <li key={j}>{li}</li>)}
                 </ul>
             )}
  
             {data.note && (
                 <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-8">
                     <p className="font-bold">{data.note}</p>
                 </div>
             )}
  
             <div className="mt-12">
                 <Link to={data.cta === 'Free Injury Consult' ? '/auto-injury' : '/contact'}>
                     <Button>{data.cta || 'Book Now'}</Button>
                 </Link>
             </div>
         </div>
      </div>
    );
};