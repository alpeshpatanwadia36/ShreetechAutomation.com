import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Download, 
  MessageCircle, 
  Phone,
  DoorClosed,
  Wind,
  Layers,
  Award
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeroProps {
  onExploreCatalog: () => void;
  onRequestQuote: () => void;
  onOpenWordPressModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onRequestQuote,
  onOpenWordPressModal,
}) => {
  return (
    <div id="hero" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle Grid Accent Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px), radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-12 pb-16 lg:pt-18 lg:pb-24">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Serving Indian Industry Since 2012</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Official Office: Vadodara, Gujarat • Pan-India Supply</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
              Industrial Automation,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400">
                Cleanroom Interlocking
              </span>{' '}
              & Entrance Solutions
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Trusted Indian manufacturer and supplier of <strong className="text-white font-semibold">Automatic PVC Rapid Roll-Up Doors</strong>, <strong className="text-white font-semibold">Cleanroom Door Interlock Controllers</strong>, <strong className="text-white font-semibold">Industrial Air Curtains</strong>, <strong className="text-white font-semibold">Tripod Turnstiles</strong>, and <strong className="text-white font-semibold">Flow Control Valves</strong>. Designed for pharmaceutical, cold chain, manufacturing, and commercial infrastructure.
            </p>

            {/* Key Assurance Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>cGMP & FDA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Pre-tested Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Custom Engineering Sizes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast Dispatch & Spares</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CIMFR Flameproof Options</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>On-site Installation Support</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onRequestQuote}
                className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 text-sm tracking-wide uppercase"
              >
                <span>Request Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCatalog}
                className="bg-slate-800/90 hover:bg-slate-700 text-white font-semibold px-5 py-3.5 rounded-lg border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 text-sm"
              >
                <span>Explore 14+ Products</span>
              </button>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium px-4 py-3.5 rounded-lg transition-all text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* WordPress Deployment Badge Notice */}
            <div className="pt-2">
              <button
                onClick={onOpenWordPressModal}
                className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition-colors underline underline-offset-4 decoration-slate-700"
              >
                <span>📦 Ready for deployment on your WordPress hosting server ({COMPANY_DETAILS.officialDomains[1]} & {COMPANY_DETAILS.officialDomains[0]})</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Industrial Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-lg" />
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">STA_AUTOMATION_HUB</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    EST. 2012
                  </span>
                </div>

                {/* Main Product Showcase Card */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/60 aspect-video group">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                    alt="Shree Tech Automation Cleanroom Interlock and Automation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">Featured Solution</span>
                    <h3 className="text-white font-bold text-base leading-tight">Microprocessor Door Interlock Systems</h3>
                    <p className="text-slate-300 text-xs mt-0.5">2 to 8 door programmable airlock controllers with emergency life safety override</p>
                  </div>
                </div>

                {/* Quick 3-card Mini Bento */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-lg hover:border-amber-500/40 transition-colors">
                    <DoorClosed className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white leading-tight">Rapid PVC Doors</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Up to 1.5 m/s</div>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-lg hover:border-amber-500/40 transition-colors">
                    <Wind className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white leading-tight">SS Air Curtains</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">22 m/s Velocity</div>
                  </div>
                  <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-lg hover:border-amber-500/40 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white leading-tight">Tripod Gates</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">SUS 304 Steel</div>
                  </div>
                </div>

                {/* Direct Contact Action Box */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wide">Direct Sales & Technical Desk</div>
                    <div className="text-xs font-bold text-white">{COMPANY_DETAILS.primaryPhone}</div>
                  </div>
                  <a
                    href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 p-2 rounded-lg transition-transform hover:scale-105"
                    title="Call directly"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Statistical Counter Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
