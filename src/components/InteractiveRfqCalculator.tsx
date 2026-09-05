import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  FileText, 
  MessageCircle, 
  Mail, 
  Phone, 
  Check, 
  Copy, 
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Send,
  Building2,
  MapPin
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/productsData';
import { COMPANY_DETAILS } from '../data/companyData';
import { ProductItem } from '../types';

interface InteractiveRfqCalculatorProps {
  preSelectedProduct: ProductItem | null;
  onClearPreSelected: () => void;
}

export const InteractiveRfqCalculator: React.FC<InteractiveRfqCalculatorProps> = ({
  preSelectedProduct,
  onClearPreSelected,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preSelectedProduct ? preSelectedProduct.id : PRODUCTS_DATA[0].id
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [dimensions, setDimensions] = useState<string>('Standard Dimensions (Customizable on site)');
  const [materialOption, setMaterialOption] = useState<string>('Stainless Steel 304 (Recommended for Pharma/Food)');
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'email' | 'call'>('whatsapp');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [ticketNumber, setTicketNumber] = useState<string>('');

  // Update when preSelectedProduct changes
  useEffect(() => {
    if (preSelectedProduct) {
      setSelectedProductId(preSelectedProduct.id);
    }
  }, [preSelectedProduct]);

  const currentProduct = PRODUCTS_DATA.find((p) => p.id === selectedProductId) || PRODUCTS_DATA[0];

  // Generate quotation text
  const rfqSummary = `*RFQ - SHREE TECH AUTOMATION INQUIRY*
━━━━━━━━━━━━━━━━━━━━━━━
*Product:* ${currentProduct.name}
*Category:* ${currentProduct.categoryLabel}
*Quantity:* ${quantity} Unit(s)
*Material:* ${materialOption}
*Dimensions / Sizing:* ${dimensions}
*Special Notes:* ${notes || 'Standard manufacturing and testing'}
───────────────────────
*Client Details:*
• Name: ${fullName || 'Not specified'}
• Company: ${companyName || 'Not specified'}
• Phone: ${phone || 'Not specified'}
• Email: ${email || 'Not specified'}
• Site / Delivery Location: ${city || 'India'}
• Preferred Contact: ${preferredContact.toUpperCase()}
━━━━━━━━━━━━━━━━━━━━━━━
_Generated via Shree Tech Automation Portal (shreetechautomation.com / .in)_`;

  const handleCopyRfq = () => {
    navigator.clipboard.writeText(rfqSummary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(rfqSummary);
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Quotation Request: ${currentProduct.name} [${companyName || fullName || 'Inquiry'}]`);
    const body = encodeURIComponent(rfqSummary);
    window.location.href = `mailto:${COMPANY_DETAILS.salesEmail}?cc=${COMPANY_DETAILS.primaryEmail}&subject=${subject}&body=${body}`;
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = 'STA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(generatedTicket);
    setSubmittedSuccess(true);
  };

  return (
    <section id="rfq-calculator" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive RFQ & Quotation Builder</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Request an Instant Factory Direct Quotation
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Select your required automation system, customize key parameters, and generate an instant request. Our engineering team at Vadodara reviews and provides competitive pricing with drawing schematics within 2–4 hours.
          </p>
        </div>

        {/* Success Banner if submitted */}
        {submittedSuccess && (
          <div className="mb-8 max-w-2xl mx-auto bg-emerald-950/80 border border-emerald-500/60 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">RFQ Submitted Successfully!</h3>
            <p className="text-xs text-emerald-200">
              Your inquiry reference number is <span className="font-mono font-bold text-white bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-600">{ticketNumber}</span>. 
              Our sales engineering department has received your request and will contact you via {preferredContact.toUpperCase()}.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSendWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={() => setSubmittedSuccess(false)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                Create another inquiry
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <form onSubmit={handleSubmitForm} className="space-y-5">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Equipment Model
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => {
                    setSelectedProductId(e.target.value);
                    if (onClearPreSelected) onClearPreSelected();
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                >
                  {PRODUCTS_DATA.map((p) => (
                    <option key={p.id} value={p.id} className="bg-slate-900 text-white py-1">
                      [{p.categoryLabel}] {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specifications: Material & Sizing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    2. Material / Finish
                  </label>
                  <select
                    value={materialOption}
                    onChange={(e) => setMaterialOption(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-amber-500 outline-none"
                  >
                    <option value="Stainless Steel 304 (Pharma / Cleanroom Grade)">Stainless Steel 304 (Pharma / Cleanroom Grade)</option>
                    <option value="Stainless Steel 316 (Corrosion & Chemical Resistant)">Stainless Steel 316 (Chemical / Marine)</option>
                    <option value="Heavy Duty Powder Coated CRCA Mild Steel">Heavy Duty Powder Coated Mild Steel</option>
                    <option value="Aluminum Alloy Extrusion">Aluminum Alloy Extrusion</option>
                    <option value="Polar Grade Flexible PVC (-40°C)">Polar Grade Flexible PVC (-40°C)</option>
                    <option value="Amber Anti-Insect Ribbed PVC">Amber Anti-Insect Ribbed PVC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    3. Quantity (Units)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      max={100}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-24 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white text-center font-mono focus:border-amber-500 outline-none"
                    />
                    <div className="flex gap-1">
                      {[1, 2, 5, 10].map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => setQuantity(q)}
                          className={`px-2.5 py-1 text-xs rounded border ${
                            quantity === q
                              ? 'bg-amber-500 text-slate-950 font-bold border-amber-500'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dimensions or Door Sizing */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Dimensions / Door Size / Installation Requirements
                </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g. 3000 mm (W) x 3000 mm (H) or 4 Feet Length for Air Curtain"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-amber-500 outline-none"
                />
              </div>

              {/* Contact Information Fields */}
              <div className="border-t border-slate-800 pt-4 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  5. Contact & Delivery Location
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company / Factory Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile / WhatsApp Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="City / State (Site Location)"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs h-full">
                      <span className="text-slate-400">Preferred reply:</span>
                      {(['whatsapp', 'email', 'call'] as const).map((mode) => (
                        <label key={mode} className="flex items-center gap-1 text-xs text-slate-300 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            checked={preferredContact === mode}
                            onChange={() => setPreferredContact(mode)}
                            className="accent-amber-500"
                          />
                          <span className="capitalize">{mode}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Additional specifications or project notes (e.g., Flameproof requirement, interlock cascade count, deadline)..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wide py-3 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit RFQ to Engineering Desk</span>
              </button>

            </form>
          </div>

          {/* Right Column: Live RFQ Preview & Instant Messaging */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Live Preview Card */}
            <div className="bg-slate-950/90 rounded-2xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                    Live RFQ Summary
                  </h3>
                </div>
                <button
                  onClick={handleCopyRfq}
                  className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded transition-colors"
                  title="Copy formatted RFQ"
                >
                  {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Preview Box */}
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-line leading-relaxed max-h-60 overflow-y-auto">
                {rfqSummary}
              </div>

              {/* Fast Direct Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 80 4580 1731)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Send via Official Email</span>
                </button>
              </div>

              {/* Assurances Box */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-[11px] text-amber-300/90 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Factory Direct Pricing Guarantee</span>
                </div>
                <p className="text-slate-400 text-[10px] leading-normal">
                  You deal directly with the original equipment manufacturer. No middlemen margins. Full warranty, schematics, and technical validation documents provided.
                </p>
              </div>

            </div>

            {/* Quick Contact Assistance */}
            <div className="bg-slate-950/60 rounded-xl border border-slate-800/80 p-4 flex items-center justify-between text-xs">
              <div>
                <p className="text-slate-400">Need urgent custom consultation?</p>
                <p className="font-bold text-white mt-0.5">{COMPANY_DETAILS.primaryPhone}</p>
              </div>
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone}`}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
              >
                Call Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
