import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const quickMessages = [
    'Hello, I need pricing for Automatic PVC High-Speed Roll Up Doors.',
    'Hello, I would like to inquire about Cleanroom Door Interlock Systems.',
    'Hello, please share technical catalog & sizes for Industrial Air Curtains.',
    'Hello, I need a quote for Tripod Turnstile & Access Control Gates.',
    'Hello, I would like to speak directly with a Sales Engineer.',
  ];

  const handleSendCustom = (msg: string) => {
    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Popup Selector */}
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 p-4 animate-in slide-in-from-bottom-5 duration-200 text-slate-800">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-slate-900 leading-tight">
                  Shree Tech Automation
                </h4>
                <p className="text-[10px] text-emerald-600 font-medium">
                  Direct WhatsApp Helpdesk
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-2 font-medium">
            Select a topic to start an instant chat:
          </p>

          <div className="space-y-1.5 max-h-56 overflow-y-auto">
            {quickMessages.map((msg, idx) => (
              <button
                key={idx}
                onClick={() => handleSendCustom(msg)}
                className="w-full text-left p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 text-[11px] text-slate-700 transition-colors border border-slate-100 flex items-center justify-between group"
              >
                <span className="line-clamp-1">{msg}</span>
                <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-100 text-center">
            <button
              onClick={() => handleSendCustom('Hello Shree Tech Automation, I would like to inquire about your automation products.')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
            >
              Or start open chat →
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-200 border-2 border-white focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline-block font-bold text-xs pr-1">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full" />
      </button>

    </div>
  );
};
