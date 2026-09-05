import React from 'react';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  CheckCircle, 
  Wrench, 
  Users,
  Compass,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS, BRANCH_LOCATIONS } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Company Profile</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pioneering Industrial Automation & Cleanroom Systems Since 2012
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in Vadodara, Gujarat (Manjalpur), Shree Tech Automation is a premier Indian manufacturer, exporter, and turnkey solutions provider.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Detailed Story */}
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
            <p>
              Founded in <strong className="text-slate-900 font-semibold">2012</strong>, <strong className="text-slate-900 font-semibold">Shree Tech Automation</strong> was established with a singular vision: to empower Indian industrial manufacturing with world-class, reliable, and energy-conserving automation equipment. Over the last decade and more, we have grown into a multi-discipline manufacturer catering to pharmaceuticals, food processing, logistics, chemical engineering, and commercial infrastructure.
            </p>

            <p>
              Our central operations are based at our registered head office and manufacturing facility in <strong className="text-slate-900 font-semibold">Vadodara, Gujarat</strong> (4-A Nirman Deep Complex, Manjalpur). Under the leadership of proprietor <strong className="text-slate-900 font-semibold">Mr. Janak Thakar</strong>, our facility integrates complete fabrication, assembly, quality inspection, and dispatch infrastructure to deliver prompt technical support, quick spare parts turnaround, and on-site commissioning across all industrial corridors in India.
            </p>

            {/* Core Competencies Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Cleanroom & Airlock Engineering</h4>
                <p className="text-xs text-slate-500">
                  Specialized micro-controller interlocking systems, explosion-proof housings, and hermetic airlock controls adhering to cGMP and USFDA standards.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Entrance Automation Systems</h4>
                <p className="text-xs text-slate-500">
                  High-cycle rapid PVC roll-up doors, heavy sliding and swing gate operators, automated boom barriers, and pedestrian turnstiles.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Hygiene & Environmental Barriers</h4>
                <p className="text-xs text-slate-500">
                  Industrial air curtains with velocities up to 22 m/s, polar grade and amber PVC strip curtains, and shatterproof electronic insect traps.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Flow Control & Valve Actuation</h4>
                <p className="text-xs text-slate-500">
                  Pneumatic actuators, automated butterfly valves, positioners, and flue gas dampers designed for chemical, steam, and fluid processing lines.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Facility & Location Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl space-y-5 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-bold text-base text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>Official Registered Office</span>
                </h3>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  PAN-INDIA
                </span>
              </div>

              {BRANCH_LOCATIONS.map((branch, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white">{branch.city}, {branch.state}</h4>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                      {branch.type.split('&')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {branch.address}
                  </p>
                  <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-3 font-mono text-slate-300">
                      <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-amber-400 hover:underline">{branch.phone}</a>
                      <span className="text-slate-600">•</span>
                      <a href={`mailto:${branch.email}`} className="text-slate-400 hover:text-white">{branch.email}</a>
                    </div>
                    {branch.googleShareUrl && (
                      <a 
                        href={branch.googleShareUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Google Map</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-xs space-y-2 text-amber-200">
                <div className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Quality Assurance & Testing Benchmark</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Every electronic controller, gear motor, and air curtain undergoes 100% burn-in testing, insulation resistance checking, and functional cycle simulation before packaging.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
