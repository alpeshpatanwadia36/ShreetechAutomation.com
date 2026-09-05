import React, { useEffect } from 'react';
import { X, Check, ArrowRight, MessageCircle, FileText, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { ProductItem } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSelectForQuote: (product: ProductItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hello Shree Tech Automation, I am inquiring about technical specifications and pricing for: ${product.name} (${product.categoryLabel}).`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              {product.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 rounded-xl overflow-hidden border border-slate-200 aspect-4/3 sm:aspect-square bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-4 relative group">
              <img
                src={product.imageUrl}
                alt={product.name}
                onError={(e) => {
                  if (product.onlineImageUrl && e.currentTarget.src !== product.onlineImageUrl) {
                    e.currentTarget.src = product.onlineImageUrl;
                  }
                }}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
              <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded font-mono uppercase">
                STA Original Equipment
              </div>
            </div>

            <div className="sm:col-span-7 space-y-3">
              <p className="text-sm font-semibold text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                {product.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  <span>1 Year Warranty</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
                  <Wrench className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pan-India Spares</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Factory Tested</span>
                </span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Technical Specifications & Engineering Data</span>
            </h3>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs sm:text-sm text-left">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? 'bg-slate-50/70 border-b border-slate-200' : 'bg-white border-b border-slate-200 last:border-b-0'}
                    >
                      <th className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-r border-slate-200">
                        {spec.label}
                      </th>
                      <td className="py-2.5 px-4 text-slate-900 font-mono text-xs">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>Key Features & Operational Advantages</span>
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {product.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Ideal Installation Environments
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-medium border border-slate-200"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2.5 rounded-lg border border-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForQuote(product);
                onClose();
              }}
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>Get Formal Quote for this Model</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
