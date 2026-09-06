import React, { useState } from 'react';
import { 
  Building, 
  Pill, 
  Utensils, 
  Snowflake, 
  FlaskConical, 
  Building2, 
  Factory,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/companyData';

interface IndustriesSectionProps {
  onSelectCategory: (cat: string) => void;
  onRequestQuote: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectCategory,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const currentIndustry = INDUSTRIES_SERVED[activeTab];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Pill':
        return <Pill className="w-4 h-4" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4" />;
      case 'Snowflake':
        return <Snowflake className="w-4 h-4" />;
      case 'FlaskConical':
        return <FlaskConical className="w-4 h-4" />;
      case 'Building2':
        return <Building2 className="w-4 h-4" />;
      case 'Factory':
        return <Factory className="w-4 h-4" />;
      default:
        return <Building className="w-4 h-4" />;
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5 text-amber-700" />
            <span>Tailored Industry Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Stringent Compliance & High Demands
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From sterile pharmaceutical suites to heavy-traffic cold storage loading bays, our equipment complies with industry-specific audit regulations.
          </p>
        </div>

        {/* Industry Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {INDUSTRIES_SERVED.map((ind, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <span className={isActive ? 'text-amber-400' : 'text-slate-500'}>
                  {getIcon(ind.icon)}
                </span>
                <span>{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Text, Recommendations, and Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-amber-700 font-mono text-xs font-semibold uppercase">
                {getIcon(currentIndustry.icon)}
                <span>Sector Focus</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentIndustry.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {currentIndustry.description}
              </p>
            </div>

            {/* Recommended Products */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recommended Shree Tech Equipment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentIndustry.recommendedProducts.map((prod, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 text-xs text-slate-800 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span className="truncate">{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit & Compliance Benefits */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Key Operational Benefits
              </h4>
              <div className="space-y-1.5">
                {currentIndustry.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onRequestQuote}
                className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow transition-colors flex items-center gap-2"
              >
                <span>Request Quotation for {currentIndustry.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Realistic Sector Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-16/10 border border-slate-200 shadow-md group bg-slate-900">
              <img
                src={currentIndustry.imageUrl}
                alt={currentIndustry.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== './products/door-interlocking-system.jpg') {
                    target.src = './products/door-interlocking-system.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                <div className="text-white text-xs font-medium">
                  Field Proven Installation & Commissioning
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
