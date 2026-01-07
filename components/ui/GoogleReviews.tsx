import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface Review {
  author: string;
  date: string;
  text: string;
  initial: string;
}

const reviews: Review[] = [
  {
    author: "Sarah J.",
    initial: "S",
    date: "2 weeks ago",
    text: "I could sit through work again after just 3 visits. Dr. Tran explained everything clearly and the rehab exercises were actually doable."
  },
  {
    author: "Michael R.",
    initial: "M",
    date: "1 month ago",
    text: "My neck rotation came back within two weeks. I was skeptical about chiropractic but the combination with rehab exercises made a huge difference."
  },
  {
    author: "David L.",
    initial: "D",
    date: "3 weeks ago",
    text: "They handled the auto injury claim paperwork perfectly. It was a huge relief to focus on healing instead of fighting with insurance."
  }
];

export const GoogleReviews: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Summary */}
      <div className="bg-white rounded-t-2xl p-6 flex flex-col md:flex-row items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
           <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
             {/* Google G Logo SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
             </svg>
           </div>
           <div>
              <div className="flex items-center">
                 <span className="font-bold text-brand-navy text-xl mr-2">Excellent</span>
                 <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                 </div>
              </div>
              <p className="text-sm text-brand-grey">Based on 150+ reviews</p>
           </div>
        </div>

        <a
            href="https://www.google.com/search?q=T98+Rehab+%26+Chiropractic+reviews"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button variant="secondary" className="text-sm px-6 py-2">Write a Review</Button>
        </a>
      </div>

      {/* Reviews Grid */}
      <div className="bg-gray-50 p-6 rounded-b-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {review.initial}
                    </div>
                    <div>
                        <div className="font-bold text-brand-navy text-sm">{review.author}</div>
                        <div className="text-xs text-gray-400">{review.date}</div>
                    </div>
                    <div className="ml-auto">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="w-5 h-5 opacity-50"
                        />
                    </div>
                </div>

                <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-[#FFC107] text-[#FFC107]" />
                    ))}
                </div>

                <p className="text-brand-grey text-sm leading-relaxed mb-4 flex-grow">"{review.text}"</p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-xs text-brand-green font-medium">
                    <CheckCircle className="w-3 h-3 mr-1" /> Verified Patient
                </div>
            </div>
        ))}
      </div>

      <div className="text-center mt-8">
           <a
            href="https://www.google.com/search?q=T98+Rehab+%26+Chiropractic+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white/80 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white pb-0.5"
           >
             Read all reviews on Google Maps →
           </a>
      </div>
    </div>
  );
};
