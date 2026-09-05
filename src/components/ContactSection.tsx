import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  Building2, 
  Check, 
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Navigation,
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { COMPANY_DETAILS, BRANCH_LOCATIONS, FAQS } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [activeBranchIndex, setActiveBranchIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Quick contact form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Equipment Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeBranch = BRANCH_LOCATIONS[activeBranchIndex];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Shree Tech Automation, I am contacting you from the website regarding: ${subject}.\nName: ${name || 'Prospective Client'}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message || 'Please share product details and pricing.'}`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Locations & Support Desk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Engineering Hubs
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Reach our Coimbatore Headquarters or Vadodara Branch for technical consultation, layout sizing, distributor inquiries, or quick quotation requests.
          </p>
        </div>

        {/* Branch Cards & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left 5 Cols: Branch Info */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center gap-2 p-1 bg-slate-200 rounded-xl">
              {BRANCH_LOCATIONS.map((b, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBranchIndex(idx)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                    activeBranchIndex === idx
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {b.city} ({b.state})
                </button>
              ))}
            </div>

            {/* Selected Branch Detail Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-amber-600 uppercase font-bold tracking-wider">
                    {activeBranch.type}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeBranch.city} Office & Facility
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              {/* Key Person / Proprietor if available */}
              {activeBranch.proprietor && (
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    <span>Proprietor: <span className="font-bold text-slate-900">{activeBranch.proprietor}</span></span>
                  </div>
                  {activeBranch.gstNumber && (
                    <div className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                      GST: {activeBranch.gstNumber}
                    </div>
                  )}
                </div>
              )}

              {/* Address */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Complete Business Address
                </div>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {activeBranch.address}
                </p>
                {activeBranch.landmark && (
                  <p className="text-xs text-amber-700 font-medium flex items-center gap-1.5 pt-0.5">
                    <Navigation className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Landmark: {activeBranch.landmark}</span>
                  </p>
                )}
              </div>

              {/* Contact Numbers */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Direct Telephone / WhatsApp
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${activeBranch.phone}`}
                    className="text-sm font-mono font-bold text-amber-700 hover:text-amber-600 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>{activeBranch.phone}</span>
                  </a>
                  {activeBranch.phoneAlt && (
                    <a
                      href={`tel:${activeBranch.phoneAlt}`}
                      className="text-sm font-mono font-bold text-slate-700 hover:text-amber-600 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-slate-400" />
                      <span>{activeBranch.phoneAlt}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Email Communications
                </div>
                <a
                  href={`mailto:${activeBranch.email}`}
                  className="text-sm font-medium text-slate-800 hover:text-amber-600 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-600" />
                  <span>{activeBranch.email}</span>
                </a>
              </div>

              {/* Working Hours */}
              <div className="space-y-1 pt-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Operating Hours
                </div>
                <p className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{COMPANY_DETAILS.workingHours}</span>
                </p>
              </div>

              {/* Action Buttons: Google Maps & WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                {activeBranch.googleShareUrl && (
                  <a
                    href={activeBranch.googleShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow"
                  >
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                    <span>Open in Google Maps</span>
                  </a>
                )}
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right 7 Cols: Interactive Map & Quick Form */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Map Frame */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm h-72 sm:h-80 relative">
              <iframe
                title={`Map of Shree Tech Automation ${activeBranch.city}`}
                src={activeBranch.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg shadow border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{activeBranch.city} Hub: {activeBranch.type}</span>
              </div>
              {activeBranch.googleShareUrl && (
                <a
                  href={activeBranch.googleShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/95 hover:bg-white text-blue-700 hover:text-blue-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow border border-slate-200 flex items-center gap-1.5 transition-all group"
                  title="View business profile & directions on Google"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Google Listing & Directions</span>
                </a>
              )}
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-base text-slate-900">
                Send Direct Message to Management Desk
              </h4>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 text-emerald-800 text-xs flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent. We will respond promptly.</span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-amber-500 outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Phone / WhatsApp *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-amber-500 outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-amber-500 outline-none"
                    />
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-amber-500 outline-none"
                    >
                      <option value="General Equipment Inquiry">General Equipment Inquiry</option>
                      <option value="PVC Roll Up Door Quotation">PVC Roll Up Door Quotation</option>
                      <option value="Cleanroom Door Interlock Project">Cleanroom Door Interlock Project</option>
                      <option value="Air Curtain / Hygiene Machine Bulk Order">Air Curtain / Hygiene Bulk Order</option>
                      <option value="Turnstile / Flap Barrier Access Control">Turnstile / Flap Barrier Access Control</option>
                      <option value="Distributor / Dealership Inquiry">Distributor / Dealership Inquiry</option>
                    </select>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Provide details about your project or requirement..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:border-amber-500 outline-none"
                  />

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Send Direct via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500">
              Clear answers regarding our manufacturing, certifications, delivery, and WordPress hosting deployment.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
