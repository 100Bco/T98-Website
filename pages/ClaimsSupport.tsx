import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DuotoneIcon } from '../components/ui/DuotoneIcon';
import { FileText, DollarSign, Users, CheckCircle } from 'lucide-react';

export const ClaimsSupport: React.FC = () => {
  return (
    <div className="bg-brand-mist">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white pt-20 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
            Claims Support
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            We Handle the Paperwork So You Can Focus on Healing.
          </p>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Dealing with insurance after a car accident is complicated. At T98, we have a dedicated team to manage the administrative side of your recovery.
          </p>
        </div>
      </section>

      {/* How We Support Your Claim */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-12 text-center">
            How We Support Your Claim
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="mb-6 flex justify-center">
                <DuotoneIcon icon={Users} size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">Attorney Collaboration</h3>
              <p className="text-brand-grey">
                We work directly with your personal injury lawyer to ensure they have the medical evidence needed to win your case.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mb-6 flex justify-center">
                <DuotoneIcon icon={DollarSign} size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">Direct Billing</h3>
              <p className="text-brand-grey">
                We bill the auto insurance (PIP/MedPay) or work on a lien (LOP) so you don't have to pay upfront.
              </p>
            </Card>

            <Card className="text-center">
              <div className="mb-6 flex justify-center">
                <DuotoneIcon icon={FileText} size={48} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy mb-3">Records Management</h3>
              <p className="text-brand-grey">
                We ensure your medical records are accurate, detailed, and delivered on time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Accepted Payment Methods */}
      <section className="py-20 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-12 text-center">
            Accepted Payment Methods for Auto Injuries
          </h2>

          <div className="space-y-6">
            <Card>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Letter of Protection (LOP)</h3>
                  <p className="text-brand-grey">
                    If you have an attorney, we can treat you now and get paid later from the settlement. <strong>$0 out-of-pocket for you.</strong>
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">PIP / MedPay</h3>
                  <p className="text-brand-grey">
                    We bill your auto insurance directly. This does not raise your premiums in most non-fault cases.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-brand-green mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Third-Party Claims</h3>
                  <p className="text-brand-grey">
                    We help guide you through the process of filing against the at-fault driver's insurance.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center bg-white p-8 rounded-card shadow-lg">
            <p className="text-brand-navy font-bold text-lg mb-6">
              Need an Attorney? We can refer you to trusted local injury lawyers.
            </p>
            <Link to="/contact">
              <Button>Get Help With My Claim</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
