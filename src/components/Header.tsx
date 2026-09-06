import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Menu, 
  X, 
  Search, 
  FileText, 
  ChevronDown, 
  ShieldCheck, 
  Building 
} from 'lucide-react';
import { COMPANY_DETAILS, BRANCH_LOCATIONS } from '../data/companyData';
import { PRODUCT_CATEGORIES } from '../data/productsData';

interface HeaderProps {
  onOpenWordPressModal: () => void;
  onSelectCategory: (categoryId: any) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenWordPressModal,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onScrollToSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    onSelectCategory(categoryId);
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onScrollToSection('products-catalog');
  };

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Notification & Direct Contact Strip */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="w-full max-w-[1800px] mx-auto flex flex-wrap items-center justify-between gap-3 px-2 sm:px-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium whitespace-nowrap"
              title="Call Vadodara Head Office"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_DETAILS.primaryPhone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_DETAILS.primaryEmail}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap"
              title="Send Inquiry Email"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>{COMPANY_DETAILS.primaryEmail}</span>
            </a>
            <a 
              href={COMPANY_DETAILS.googleBusinessShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors whitespace-nowrap"
              title="View Shree Tech Automation on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Official Office: Vadodara, Gujarat</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1 rounded font-medium transition-all text-xs whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Fullpage single-line design */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between gap-4 xl:gap-8 flex-nowrap">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="font-extrabold text-base sm:text-lg tracking-wider font-mono">STA</span>
            </div>
            <div className="shrink-0">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="font-black text-lg sm:text-xl xl:text-2xl text-slate-900 tracking-tight">SHREE TECH</span>
                <span className="font-black text-lg sm:text-xl xl:text-2xl text-amber-600 tracking-tight">AUTOMATION</span>
              </div>
              <p className="hidden xl:block text-[11px] text-slate-500 font-medium tracking-wide whitespace-nowrap">
                Automation • Cleanrooms • Security & Hygiene Solutions
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links - Guaranteed Single Line with whitespace-nowrap */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-[13px] xl:text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0">
            <button
              onClick={() => handleNavClick('hero')}
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-1"
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button 
                onClick={() => handleNavClick('products-catalog')}
                className="flex items-center gap-1 hover:text-amber-600 transition-colors py-1 whitespace-nowrap"
              >
                <span>Products & Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isProductsDropdownOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute left-0 top-full w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Categories</p>
                  </div>
                  {PRODUCT_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between group whitespace-nowrap"
                    >
                      <span>{category.name}</span>
                      <span className="text-[10px] bg-slate-100 group-hover:bg-amber-200 text-slate-600 group-hover:text-amber-900 px-1.5 py-0.5 rounded font-mono">
                        {category.count}
                      </span>
                    </button>
                  ))}
                  <div className="pt-2 mt-2 border-t border-slate-100 px-3">
                    <button
                      onClick={() => handleNavClick('products-catalog')}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 whitespace-nowrap"
                    >
                      <span>View All Industrial Products →</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('industries')}
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-1"
            >
              Industries
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-1"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-1"
            >
              Why Choose Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-1"
            >
              Contact & Office
            </button>
          </nav>

          {/* Search & Action CTA */}
          <div className="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-50 focus:bg-white rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none w-32 sm:w-36 lg:w-40 xl:w-52 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => handleNavClick('rfq-calculator')}
              className="bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white font-bold text-xs uppercase tracking-wide px-3.5 xl:px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('rfq-calculator')}
              className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search air curtains, interlocks, doors..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-100 rounded-lg border border-slate-200 outline-none"
            />
          </div>

          <div className="space-y-1 border-b border-slate-100 pb-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('products-catalog')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded flex justify-between"
            >
              <span>Products & Solutions</span>
              <span className="text-xs text-amber-600">14 Items</span>
            </button>

            <div className="pl-4 space-y-1 border-l-2 border-amber-200 my-1">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="block w-full text-left px-2 py-1 text-xs text-slate-600 hover:text-amber-600"
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('industries')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Industries Served
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              About Shree Tech Automation
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2 font-medium text-slate-800 hover:bg-slate-50 rounded"
            >
              Contact & Official Office
            </button>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => handleNavClick('rfq-calculator')}
              className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-2.5 rounded-lg text-center text-sm shadow"
            >
              Request Fast Quotation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
