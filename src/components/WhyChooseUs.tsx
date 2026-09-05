import React from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Clock, 
  Truck, 
  FileCheck2, 
  Headphones,
  Star,
  Quote
} from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-amber-600" />,
      title: 'Original Manufacturer & Direct Pricing',
      description: 'You partner directly with the engineering source. No middlemen overhead, authentic warranty, and factory-direct transparent pricing.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
      title: '100% Pre-Dispatch Cycle Testing',
      description: 'Every door interlock board, motor gearhead, and air curtain undergoes 48-hour burn-in and load testing before packing.',
    },
    {
      icon: <Wrench className="w-5 h-5 text-amber-600" />,
      title: 'Custom Engineering & Sizing',
      description: 'We fabricate custom door sizes, multi-door airlock cascades up to 8 doors, and explosion-proof enclosures tailored to exact site drawings.',
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      title: 'Pan-India Logistics & Commissioning',
      description: 'From our centralized manufacturing facility in Vadodara, Gujarat, we rapidly dispatch equipment and deploy skilled technicians for on-site commissioning nationwide.',
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      title: 'Ready Inventory of Critical Spares',
      description: 'Zero operational downtime. We stock replacement motors, EM locks, circuit boards, and PVC rolls for same-day dispatch.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-amber-600" />,
      title: 'Dedicated Technical AMC Support',
      description: 'Our certified engineers offer preventive maintenance contracts, phone assistance, and scheduled on-site maintenance audits.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>The Shree Tech Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Leading Enterprises Choose Shree Tech Automation
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Engineered reliability, prompt response times, and uncompromising build quality trusted by 500+ industrial plants across India.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-300 space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h3 className="font-bold text-base text-slate-900 leading-snug">
                {adv.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
              Client Experiences
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Trusted in Critical Cleanroom & Logistics Facilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{t.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1">
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-amber-400 font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-400">{t.company} • {t.location}</div>
                  <div className="text-[10px] text-slate-500 font-mono pt-1">
                    Installed: {t.productInstalled}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
