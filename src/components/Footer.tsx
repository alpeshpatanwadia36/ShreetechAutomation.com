import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Settings, 
  MessageCircle, 
  ShieldCheck, 
  Award,
  ArrowUp,
  Globe,
  ExternalLink
} from 'lucide-react';
import { COMPANY_DETAILS, BRANCH_LOCATIONS } from '../data/companyData';
import { PRODUCT_CATEGORIES } from '../data/productsData';

interface FooterProps {
  onOpenWordPressModal: () => void;
  onSelectCategory: (categoryId: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenWordPressModal,
  onSelectCategory,
  onScrollToSection,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    onScrollToSection('products-catalog');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 text-slate-950 py-8 px-4 sm:px-6">
        <div className="w-full max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-6 px-2 sm:px-4 lg:px-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
              Ready to Automate Your Cleanrooms or Entrance Gates?
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-900">
              Connect directly with our engineering team in Vadodara for custom drawings and quotations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onScrollToSection('rfq-calculator')}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-5 py-3 rounded-xl shadow text-xs uppercase tracking-wide transition-all"
            >
              Get Instant Quote
            </button>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-xl shadow text-xs flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-slate-900 flex items-center justify-center text-white font-extrabold text-base font-mono">
                STA
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">SHREE TECH </span>
                <span className="font-extrabold text-lg text-amber-500 tracking-tight">AUTOMATION</span>
                <p className="text-[10px] text-slate-400">Pioneering Automation Since 2012</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Manufacturer, supplier, and exporter of high speed PVC roll up doors, cleanroom door interlocking systems, industrial air curtains, stainless steel tripod turnstiles, and flow automation valves.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] text-amber-400 font-mono">
                <ShieldCheck className="w-3 h-3 text-amber-500" />
                <span>ISO & cGMP Standards</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-[10px] text-slate-300 font-mono">
                <Award className="w-3 h-3 text-amber-500" />
                <span>Pan-India Supply</span>
              </span>
            </div>

            {/* Official Domains */}
            <div className="pt-2 text-[11px] text-slate-500">
              <span className="text-slate-400 font-medium">Official Domains: </span>
              <a href="https://www.shreetechautomation.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 underline mr-2">
                shreetechautomation.com
              </a>
              <a href="https://www.shreetechautomation.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 underline">
                shreetechautomation.in
              </a>
            </div>
          </div>

          {/* Col 2: Product Categories (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2">
              {PRODUCT_CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-amber-400 transition-colors text-left text-xs flex items-center justify-between w-full group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                    <span className="text-[10px] text-slate-600 font-mono">({cat.count})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onScrollToSection('hero')} className="hover:text-amber-400 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('about')} className="hover:text-amber-400 transition-colors">
                  About the Company
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('industries')} className="hover:text-amber-400 transition-colors">
                  Industries Served
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('why-us')} className="hover:text-amber-400 transition-colors">
                  Quality & Advantages
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('rfq-calculator')} className="hover:text-amber-400 transition-colors">
                  Request Quotation (RFQ)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('contact')} className="hover:text-amber-400 transition-colors">
                  Contact & Head Office
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenWordPressModal}
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20"
                >
                  <Settings className="w-3 h-3" />
                  <span>WordPress Deploy Guide</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Offices (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Official Registered Office
            </h4>

            {BRANCH_LOCATIONS.map((loc, i) => (
              <div key={i} className="space-y-1.5 text-[11px] bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-amber-400">{loc.city} Head Office</div>
                  <span className="text-[9px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">HQ & Works</span>
                </div>
                {loc.proprietor && (
                  <p className="text-[10px] text-slate-300">Proprietor: <span className="font-semibold text-white">{loc.proprietor}</span></p>
                )}
                <p className="text-slate-400 leading-tight">{loc.address}</p>
                <div className="pt-1 flex flex-col gap-0.5">
                  <a href={`tel:${loc.phone}`} className="hover:text-white font-mono text-amber-300">
                    Tel: {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`} className="hover:text-white">
                    Email: {loc.email}
                  </a>
                  {loc.googleShareUrl && (
                    <a 
                      href={loc.googleShareUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pt-1 text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>View on Google Maps</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to top */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px]">
          <div className="space-y-1">
            <p>© 2012–2026 Shree Tech Automation. All rights reserved.</p>
            <p className="text-slate-400">
              Manjalpur, Vadodara - 390011, Gujarat, India. Official Portal • Designed for high performance and WordPress hosting compatibility.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenWordPressModal}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              <Settings className="w-3 h-3" />
              <span>WordPress Hosting Export & Setup</span>
            </button>
            <button
              onClick={scrollToTop}
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white p-2 rounded-lg border border-slate-800 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
